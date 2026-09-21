// SEO text + structured data for the service and town pages. Plain JS with
// relative imports so the build-time prerenderer can use it directly.
import { SERVICE_PAGES } from '../data/services.js';
import { TOWNS } from '../data/towns.js';

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
