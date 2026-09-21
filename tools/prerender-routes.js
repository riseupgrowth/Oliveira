#!/usr/bin/env node
/**
 * Post-build: give every route its own static HTML.
 *
 * The site is a client-rendered SPA, so without this every URL returns the
 * home page's <head> (same title, description and canonical) to crawlers that
 * don't run JavaScript. For each route we copy dist/index.html into
 * dist/<route>/index.html and swap in that page's title, description,
 * canonical, Open Graph/Twitter tags and a no-JS content fallback.
 * Values are read from the <SEO ... /> props in each page component, so the
 * page files stay the single source of truth.
 *
 * Also writes dist/404.html (served by Vercel for unknown URLs with a real
 * 404 status), dist/llms.txt, and stamps <lastmod> into dist/sitemap.xml.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const SITE = 'https://www.oliveiracorporation.com';

const ROUTES = [
  { path: '/', file: 'HomePage.jsx' },
  { path: '/about', file: 'AboutPage.jsx' },
  { path: '/gallery', file: 'GalleryPage.jsx' },
  { path: '/service-areas', file: 'ServiceAreasPage.jsx' },
  { path: '/services', file: 'ServicesPage.jsx' },
  { path: '/contact', file: 'ContactPage.jsx' },
  { path: '/privacy', file: 'PrivacyPolicyPage.jsx' },
  { path: '/terms', file: 'TermsPage.jsx' },
];

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function readSeoProps(file) {
  const src = fs.readFileSync(path.join(ROOT, 'src/pages', file), 'utf8');
  const tag = src.match(/<SEO\b([\s\S]*?)\/>/);
  if (!tag) throw new Error(`No <SEO /> in ${file}`);
  const prop = (name) => {
    const m = tag[1].match(new RegExp(`\\b${name}=(?:"([^"]*)"|'([^']*)')`));
    return m ? (m[1] ?? m[2]) : undefined;
  };
  return {
    title: prop('title'),
    description: prop('description'),
    image: prop('image') || '/images/site/hero.jpg',
  };
}

function seoBlock({ title, description, url, image }) {
  const img = image.startsWith('http') ? image : `${SITE}${image}`;
  const t = esc(title);
  const d = esc(description);
  return `<!--seo:start-->
		<title>${t}</title>
		<meta data-rh="true" name="description" content="${d}" />
		<link data-rh="true" rel="canonical" href="${url}" />
		<meta data-rh="true" property="og:type" content="website" />
		<meta data-rh="true" property="og:site_name" content="Oliveira Landscaping" />
		<meta data-rh="true" property="og:title" content="${t}" />
		<meta data-rh="true" property="og:description" content="${d}" />
		<meta data-rh="true" property="og:url" content="${url}" />
		<meta data-rh="true" property="og:image" content="${img}" />
		<meta data-rh="true" name="twitter:card" content="summary_large_image" />
		<meta data-rh="true" name="twitter:title" content="${t}" />
		<meta data-rh="true" name="twitter:description" content="${d}" />
		<meta data-rh="true" name="twitter:url" content="${url}" />
		<meta data-rh="true" name="twitter:image" content="${img}" />
		<!--seo:end-->`;
}

function noscriptBlock({ title, description }) {
  const links = ROUTES.map((r) => `<a href="${r.path}">${r.path === '/' ? 'Home' : r.path.slice(1).replace('-', ' ')}</a>`).join(' &middot; ');
  return `<!--ns:start-->
		<noscript>
			<div style="max-width:820px;margin:0 auto;padding:32px 20px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;line-height:1.6;color:#1f2937">
				<h1>${esc(title.split('|')[0].trim())}</h1>
				<p>${esc(description)}</p>
				<p>Oliveira Landscaping &middot; 50 Whitman Street, Bridgewater, MA 02324 &middot; <a href="tel:+17742973349">(774) 297-3349</a></p>
				<p>${links}</p>
			</div>
		</noscript>
		<!--ns:end-->`;
}

const replaceBetween = (html, start, end, block) => {
  const a = html.indexOf(start);
  const b = html.indexOf(end);
  if (a === -1 || b === -1) throw new Error(`Markers ${start}/${end} not found in dist/index.html`);
  return html.slice(0, a) + block + html.slice(b + end.length);
};

// Drop tags that only belong on the home page (hero preload, LocalBusiness JSON-LD).
const stripHomeOnly = (html) =>
  html
    .replace(/\s*<link[^>]*data-route="home"[^>]*>/g, '')
    .replace(/\s*<script[^>]*data-route="home"[^>]*>[\s\S]*?<\/script>/g, '');

// Server-rendered app markup for a route (built by `vite build --ssr`).
let renderRoute = null;
async function loadRenderer() {
  const entry = path.join(ROOT, 'dist-ssr', 'entry-server.js');
  if (!fs.existsSync(entry)) return;
  ({ render: renderRoute } = await import(pathToFileURL(entry).href));
}

// Put the server-rendered markup in #root and the page's JSON-LD (from Helmet)
// in <head>, replacing the static home-page JSON-LD so nothing is duplicated.
const withApp = (html, url) => {
  if (!renderRoute) return html;
  const { html: app, helmet } = renderRoute(url);
  const scripts = helmet?.script?.toString() || '';
  let out = html.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
  if (scripts) out = stripHomeOnly(out).replace('</head>', `${scripts}\n\t</head>`);
  return out;
};

const load = (rel) => import(pathToFileURL(path.join(ROOT, rel)).href);

function writePage(template, route, seo, noscript) {
  const url = route === '/' ? `${SITE}/` : `${SITE}${route}`;
  let html = replaceBetween(template, '<!--seo:start-->', '<!--seo:end-->', seoBlock({ ...seo, url }));
  if (route !== '/') html = stripHomeOnly(html);
  // With the page server-rendered into #root, the <noscript> fallback only adds a
  // duplicate H1 — keep it only if SSR is unavailable.
  html = replaceBetween(html, '<!--ns:start-->', '<!--ns:end-->', renderRoute ? '' : noscriptBlock(noscript || seo));
  html = withApp(html, route);
  const out = route === '/' ? path.join(DIST, 'index.html') : path.join(DIST, route.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  return url;
}

async function main() {
  await loadRenderer();
  const indexPath = path.join(DIST, 'index.html');
  if (!fs.existsSync(indexPath)) throw new Error('dist/index.html not found - run vite build first');
  const template = fs.readFileSync(indexPath, 'utf8');
  const pages = [];

  // Static pages: SEO values come from the <SEO /> props in each page file.
  for (const route of ROUTES) {
    const seo = readSeoProps(route.file);
    const url = writePage(template, route.path, seo);
    pages.push({ path: route.path, ...seo, url, section: 'Pages' });
  }

  // Data-driven pages.
  const { PROJECTS } = await load('src/data/gallery.js');
  const { projectSeo, projectPath } = await load('src/lib/gallery.js');
  const { SERVICE_PAGES } = await load('src/data/services.js');
  const { TOWNS } = await load('src/data/towns.js');
  const { serviceSeo, servicePath, townSeo, townPath } = await load('src/lib/seo-pages.js');

  const dynamic = [
    ...SERVICE_PAGES.map((s) => ({ route: servicePath(s), seo: serviceSeo(s), section: 'Services', priority: '0.9', freq: 'monthly' })),
    ...TOWNS.map((t) => ({ route: townPath(t), seo: townSeo(t), section: 'Service areas', priority: '0.8', freq: 'monthly' })),
    ...PROJECTS.map((p) => ({ route: projectPath(p), seo: projectSeo(p), ns: { title: p.title, description: p.summary }, section: 'Projects', priority: '0.7', freq: 'yearly' })),
  ];
  for (const d of dynamic) {
    const url = writePage(template, d.route, { image: '/images/site/hero.jpg', ...d.seo }, d.ns);
    pages.push({ path: d.route, title: d.seo.title, description: d.seo.description, url, section: d.section, priority: d.priority, freq: d.freq });
  }

  // Real 404 page: Vercel serves dist/404.html with status 404 for unknown paths.
  let notFound = replaceBetween(
    template,
    '<!--seo:start-->',
    '<!--seo:end-->',
    '<title>Page Not Found | Oliveira Landscaping</title>\n\t\t<meta name="robots" content="noindex" />',
  );
  notFound = replaceBetween(notFound, '<!--ns:start-->', '<!--ns:end-->', noscriptBlock({ title: 'Page Not Found', description: 'The page you were looking for could not be found.' }));
  fs.writeFileSync(path.join(DIST, '404.html'), withApp(stripHomeOnly(notFound), '/__not-found__'));

  // Sitemap: stamp lastmod on the static entries and append every generated page.
  const today = new Date().toISOString().slice(0, 10);
  const sitemapPath = path.join(DIST, 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    let xml = fs
      .readFileSync(sitemapPath, 'utf8')
      .replace(/\s*<lastmod>[^<]*<\/lastmod>/g, '')
      .replace(/(<loc>[^<]*<\/loc>)/g, `$1\n    <lastmod>${today}</lastmod>`);
    const listed = new Set([...xml.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]));
    const extra = pages
      .filter((p) => !listed.has(p.url))
      .map((p) => `  <url>\n    <loc>${p.url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.freq || 'monthly'}</changefreq>\n    <priority>${p.priority || '0.8'}</priority>\n  </url>`)
      .join('\n');
    xml = xml.replace('</urlset>', `${extra}\n</urlset>`);
    fs.writeFileSync(sitemapPath, xml);
  }

  // llms.txt
  const sections = ['Pages', 'Services', 'Service areas', 'Projects'];
  const llms = [
    '# Oliveira Landscaping',
    '',
    "> Family-owned landscaping, hardscape and construction company serving Boston's South Shore, Massachusetts. 50 Whitman Street, Bridgewater, MA 02324. Phone (774) 297-3349.",
    '',
    ...sections.flatMap((sec) => [`## ${sec}`, ...pages.filter((p) => p.section === sec).map((p) => `- [${p.title}](${p.url}): ${p.description}`), '']),
  ].join('\n');
  fs.writeFileSync(path.join(DIST, 'llms.txt'), llms);

  fs.rmSync(path.join(ROOT, 'dist-ssr'), { recursive: true, force: true });
  console.log(`prerender-routes: wrote ${pages.length} pages${renderRoute ? ' (server-rendered)' : ''} + 404.html + sitemap + llms.txt`);
}

main().catch((err) => { console.error(err); process.exit(1); });
