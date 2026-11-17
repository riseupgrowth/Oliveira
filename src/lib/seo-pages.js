// SEO text + structured data for the service and town pages. Plain JS with
// relative imports so the build-time prerenderer can use it directly.
import { SERVICE_PAGES } from '../data/services.js';
import { TOWNS } from '../data/towns.js';
import { BLOG_POSTS, BLOG_AUTHOR, plainText } from '../data/blog.js';

export const SITE_URL = 'https://www.oliveiracorporation.com';
export const BUSINESS_ID = `${SITE_URL}/#business`;

export const servicePath = (service) => `/services/${service.slug}`;
export const townPath = (town) => `/service-areas/${town.slug}`;

export function serviceSeo(service) {
  return { title: service.metaTitle, description: service.metaDescription };
}

export function townSeo(town) {
  const title = `Landscaping & Hardscape in ${town.name}, MA | Oliveira Landscaping`;
  const where = town.miles <= 1
    ? 'Based right here in Bridgewater.'
    : `Local crews about ${town.miles} miles from our Bridgewater base.`;
  let description = `Landscaping, paver patios, retaining walls, lawn care and tree work in ${town.name}, MA (${town.county}). ${where}`;
  if (description.length > 160) description = `Landscaping, patios, walls, lawn care and tree work in ${town.name}, MA (${town.county}). ${where}`;
  return { title, description };
}

const breadcrumb = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE_URL}${path}` })),
});

export function serviceSchema(service) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      serviceType: service.name,
      description: service.metaDescription,
      url: `${SITE_URL}${servicePath(service)}`,
      provider: { '@type': 'LandscapingBusiness', '@id': BUSINESS_ID, name: 'Oliveira Landscaping' },
      areaServed: TOWNS.map((t) => ({ '@type': 'City', name: `${t.name}, MA` })),
    },
    breadcrumb([['Home', '/'], ['Services', '/services'], [service.name, servicePath(service)]]),
  ];
}

export function townSchema(town) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Landscaping & Hardscape in ${town.name}, MA`,
      serviceType: 'Landscaping and hardscape',
      url: `${SITE_URL}${townPath(town)}`,
      provider: { '@type': 'LandscapingBusiness', '@id': BUSINESS_ID, name: 'Oliveira Landscaping' },
      areaServed: {
        '@type': 'City',
        name: `${town.name}, MA`,
        geo: { '@type': 'GeoCoordinates', latitude: town.lat, longitude: town.lng },
        containedInPlace: { '@type': 'AdministrativeArea', name: `${town.county}, Massachusetts` },
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: SERVICE_PAGES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name } })),
      },
    },
    breadcrumb([['Home', '/'], ['Service Areas', '/service-areas'], [`${town.name}, MA`, townPath(town)]]),
  ];
}

// ---------------------------------------------------------------- Blog


export const blogPath = (post) => `/blog/${post.slug}`;

export function blogSeo(post) {
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    image: post.cover,
    type: 'article',
    published: post.date,
    modified: post.updated || post.date,
  };
}

const ORG = { '@type': 'Organization', '@id': BUSINESS_ID, name: 'Oliveira Landscaping', url: SITE_URL };

export const faqSchema = (faq) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: plainText(a) },
  })),
});

export function blogPostSchema(post) {
  const url = `${SITE_URL}${blogPath(post)}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      headline: post.title,
      description: post.metaDescription,
      abstract: post.quickAnswer,
      image: `${SITE_URL}${post.cover}`,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      articleSection: post.category,
      inLanguage: 'en-US',
      author: { ...ORG, name: BLOG_AUTHOR.name, description: BLOG_AUTHOR.bio },
      publisher: { ...ORG, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
      about: post.services.map((slug) => SERVICE_PAGES.find((s) => s.slug === slug)).filter(Boolean).map((s) => ({ '@type': 'Service', name: s.name, url: `${SITE_URL}${servicePath(s)}` })),
      spatialCoverage: { '@type': 'Place', name: "Boston's South Shore, Massachusetts" },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.quick-answer'] },
    },
    faqSchema(post.faq),
    breadcrumb([['Home', '/'], ['Blog', '/blog'], [post.title, blogPath(post)]]),
  ];
}

export function blogIndexSchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${SITE_URL}/blog#blog`,
      name: 'Oliveira Landscaping Blog',
      description: "Landscaping, hardscape and yard-care guides for Boston's South Shore, Massachusetts.",
      url: `${SITE_URL}/blog`,
      publisher: ORG,
      inLanguage: 'en-US',
      blogPost: BLOG_POSTS.map((p) => ({
        '@type': 'BlogPosting',
        headline: p.title,
        url: `${SITE_URL}${blogPath(p)}`,
        datePublished: p.date,
        image: `${SITE_URL}${p.cover}`,
      })),
    },
    breadcrumb([['Home', '/'], ['Blog', '/blog']]),
  ];
}
