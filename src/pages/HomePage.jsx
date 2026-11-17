import React from 'react';
import SEO from '@/components/SEO';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ParallaxShowcase from '@/components/ParallaxShowcase';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import GallerySection from '@/components/GallerySection';
import StatsBand from '@/components/StatsBand';
import ServiceAreasPreview from '@/components/ServiceAreasPreview';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import FaqSection from '@/components/FaqSection';
import { HOME_FAQ } from '@/data/faq';
import { faqSchema } from '@/lib/seo-pages';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Oliveira Landscaping | South Shore MA Landscaping & Hardscape"
        description="Family-owned landscaping, hardscape, paver patios & retaining walls on Boston's South Shore. 16+ years, licensed & insured. Free estimates."
        path="/"
        keywords="landscaping South Shore MA, landscapers near me, hardscape contractor Massachusetts, paver patio installation, retaining wall builders, lawn care South Shore, Oliveira Landscaping, mulch installation, Bridgewater landscaping"
        includeLocalBusiness
        schema={[faqSchema(HOME_FAQ)]}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ParallaxShowcase />
      <GallerySection />
      <WhyChooseUsSection />
      <StatsBand />
      <ServiceAreasPreview />
      <ReviewsSection />
      <FaqSection items={HOME_FAQ} />
      <ContactSection />
    </>
  );
};

export default HomePage;
