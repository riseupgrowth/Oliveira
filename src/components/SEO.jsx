import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS, ALL_TOWNS } from '@/data/site';
import { SERVICE_PAGES } from '@/data/services';

/**
 * Reusable SEO head component.
 * Renders title, description, canonical, Open Graph, Twitter tags,
 * and (on the home page) LocalBusiness + Service JSON-LD structured data.
 */
const SEO = ({
  title,
  description,
  path = '/',
  image = '/images/site/hero.jpg',
  keywords,
  includeLocalBusiness = false,
  schema = [],
  type = 'website',
  published,
  modified,
}) => {
  const url = `${BUSINESS.siteUrl}${path}`;
  const fullImage = image.startsWith('http') ? image : `${BUSINESS.siteUrl}${image}`;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LandscapingBusiness',
    name: BUSINESS.name,
    image: fullImage,
    '@id': `${BUSINESS.siteUrl}/#business`,
    url: BUSINESS.siteUrl,
    logo: `${BUSINESS.siteUrl}/logo.png`,
    telephone: '+17742973349',
    email: BUSINESS.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.9904,
      longitude: -70.9751,
    },
    areaServed: ALL_TOWNS.map((t) => ({
      '@type': 'City',
      name: `${t}, MA`,
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '18:00',
    },
    sameAs: [BUSINESS.social.instagram, BUSINESS.google.reviewUrl].filter(Boolean),
    foundingDate: String(BUSINESS.founded),
    slogan: BUSINESS.tagline,
    description:
      "Family-owned, licensed and insured landscaping and hardscape company based in Bridgewater, MA, serving 30+ towns on Boston's South Shore with paver patios, retaining walls, concrete patios, plantings, mulching, lawn care, grading, drainage and tree removal.",
    hasMap: 'https://www.google.com/maps/search/?api=1&query=Oliveira+Landscaping+50+Whitman+Street+Bridgewater+MA',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+17742973349',
      contactType: 'customer service',
      areaServed: 'US-MA',
      availableLanguage: 'English',
    },
    knowsAbout: [
      'Landscaping', 'Hardscaping', 'Paver patios', 'Retaining walls', 'Natural stone walls',
      'Concrete patios', 'Lawn care', 'Mulching', 'Grading and drainage', 'Tree removal',
      'Coastal landscaping', 'Massachusetts South Shore',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landscaping & Hardscape Services',
      itemListElement: SERVICE_PAGES.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, url: `${BUSINESS.siteUrl}/services/${s.slug}` },
      })),
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BUSINESS.siteUrl}/#website`,
    name: BUSINESS.name,
    url: BUSINESS.siteUrl,
    inLanguage: 'en-US',
    publisher: { '@id': `${BUSINESS.siteUrl}/#business` },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      {published && <meta property="article:published_time" content={published} />}
      {modified && <meta property="article:modified_time" content={modified} />}
      <meta property="og:site_name" content={BUSINESS.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={fullImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={fullImage} />

      {includeLocalBusiness && (
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      )}
      {includeLocalBusiness && (
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      )}
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
