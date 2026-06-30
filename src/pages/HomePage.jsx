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

const HomePage = () => {
  return (
    <>
      <SEO
        title="Oliveira Landscaping & Construction | South Shore MA Landscapers"
        description="Family-owned landscaping, hardscape, paver patios, retaining walls & lawn care on Boston's South Shore. 16+ years, 1,500+ projects, 5.0 on Google. Licensed & insured. Free estimates."
        path="/"
        keywords="landscaping South Shore MA, landscapers near me, hardscape contractor Massachusetts, paver patio installation, retaining wall builders, lawn care South Shore, Oliveira Landscaping, mulch installation, Bridgewater landscaping"
        includeLocalBusiness
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
      <ContactSection />
    </>
  );
};

export default HomePage;
