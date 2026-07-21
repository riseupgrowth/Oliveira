import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS, ALL_TOWNS, SERVICES } from '@/data/site';

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
    telephone: BUSINESS.phoneDisplay,
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
    sameAs: [BUSINESS.social.instagram].filter(Boolean),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '45',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landscaping & Hardscape Services',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title },
      })),
    },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
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
    </Helmet>
  );
};

export default SEO;
