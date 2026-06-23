import React from 'react';
import SEO from '@/components/SEO';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import GallerySection from '@/components/GallerySection';
import ServiceAreasPreview from '@/components/ServiceAreasPreview';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Oliveira Landscaping & Construction | South Shore MA Landscapers"
        description="Premier landscaping, hardscape, paver patios, retaining walls & lawn care on Boston's South Shore. Licensed & insured. Free estimates. Serving Quincy, Hingham, Plymouth & all South Shore towns."
        path="/"
        keywords="landscaping South Shore MA, landscapers near me, hardscape contractor Massachusetts, paver patio installation, retaining wall builders, lawn care South Shore, Oliveira Landscaping, mulch installation, Bridgewater landscaping"
        includeLocalBusiness
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <GallerySection />
      <ServiceAreasPreview />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
