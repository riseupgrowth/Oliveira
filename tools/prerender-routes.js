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
const withApp = (html, url) => {
  if (!renderRoute) return html;
  const { html: app } = renderRoute(url);
  return html.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
};

async function main() {
  await loadRenderer();
  const indexPath = path.join(DIST, 'index.html');
  if (!fs.existsSync(indexPath)) throw new Error('dist/index.html not found - run vite build first');
  const template = fs.readFileSync(indexPath, 'utf8');
  const pages = [];

  for (const route of ROUTES) {
    const seo = readSeoProps(route.file);
    const url = route.path === '/' ? `${SITE}/` : `${SITE}${route.path}`;
    pages.push({ ...route, ...seo, url });
    if (route.path === '/') {
      // Home keeps its hand-written rich no-JS fallback; only refresh the head.
      fs.writeFileSync(indexPath, withApp(replaceBetween(template, '<!--seo:start-->', '<!--seo:end-->', seoBlock({ ...seo, url })), '/'));
      continue;
    }
    let html = replaceBetween(template, '<!--seo:start-->', '<!--seo:end-->', seoBlock({ ...seo, url }));
    html = replaceBetween(html, '<!--ns:start-->', '<!--ns:end-->', noscriptBlock(seo));
    html = withApp(stripHomeOnly(html), route.path);
    const out = path.join(DIST, route.path.slice(1), 'index.html');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
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

  // llms.txt
  const llms = [
    '# Oliveira Landscaping',
    '',
    "> Family-owned landscaping, hardscape and construction company serving Boston's South Shore, Massachusetts. 50 Whitman Street, Bridgewater, MA 02324. Phone (774) 297-3349.",
    '',
    '## Pages',
    ...pages.map((p) => `- [${p.title}](${p.url}): ${p.description}`),
    '',
  ].join('\n');
  fs.writeFileSync(path.join(DIST, 'llms.txt'), llms);

  // Sitemap lastmod
  const sitemapPath = path.join(DIST, 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    const today = new Date().toISOString().slice(0, 10);
    const xml = fs
      .readFileSync(sitemapPath, 'utf8')
      .replace(/\s*<lastmod>[^<]*<\/lastmod>/g, '')
      .replace(/(<loc>[^<]*<\/loc>)/g, `$1\n    <lastmod>${today}</lastmod>`);
    fs.writeFileSync(sitemapPath, xml);
  }

  // One static page per gallery project (/gallery/<slug>), plus sitemap entries.
  const { PROJECTS } = await import(pathToFileURL(path.join(ROOT, 'src/data/gallery.js')).href);
  const { projectSeo, projectPath } = await import(pathToFileURL(path.join(ROOT, 'src/lib/gallery.js')).href);
  for (const project of PROJECTS) {
    const route = projectPath(project);
    const seo = projectSeo(project);
    const url = `${SITE}${route}`;
    let html = replaceBetween(template, '<!--seo:start-->', '<!--seo:end-->', seoBlock({ ...seo, url }));
    html = replaceBetween(html, '<!--ns:start-->', '<!--ns:end-->', noscriptBlock({ title: project.title, description: project.summary }));
    html = withApp(stripHomeOnly(html), route);
    const out = path.join(DIST, route.slice(1), 'index.html');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
    pages.push({ path: route, title: seo.title, description: seo.description, url, project: true });
  }
  if (fs.existsSync(sitemapPath)) {
    const today = new Date().toISOString().slice(0, 10);
    const entries = pages
      .filter((p) => p.project)
      .map((p) => `  <url>\n    <loc>${p.url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>yearly</changefreq>\n    <priority>0.7</priority>\n  </url>`)
      .join('\n');
    fs.writeFileSync(sitemapPath, fs.readFileSync(sitemapPath, 'utf8').replace('</urlset>', `${entries}\n</urlset>`));
  }
  const projectLines = pages.filter((p) => p.project).map((p) => `- [${p.title}](${p.url}): ${p.description}`);
  fs.writeFileSync(path.join(DIST, 'llms.txt'), `${llms}\n## Projects\n${projectLines.join('\n')}\n`);

  fs.rmSync(path.join(ROOT, 'dist-ssr'), { recursive: true, force: true });
  console.log(`prerender-routes: wrote ${pages.length} route pages${renderRoute ? ' (server-rendered)' : ''} + 404.html + llms.txt`);
}

main().catch((err) => { console.error(err); process.exit(1); });
