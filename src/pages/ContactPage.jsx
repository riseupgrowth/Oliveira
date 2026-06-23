import React from 'react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Us | Free Estimate | Oliveira Landscaping — South Shore MA"
        description="Contact Oliveira Landscaping Construction for a free, no-obligation estimate. Call (774) 297-3349 or send a message. Serving Boston's South Shore — landscaping, hardscape & patios."
        path="/contact"
        keywords="contact Oliveira Landscaping, free landscaping estimate South Shore, landscaper phone number MA, request landscaping quote"
        image="/images/site/contact.jpg"
      />

      <PageHero
        title="Let's Build Something Beautiful"
        subtitle="Tell us about your project and we'll get back to you within one business day — estimates are always free."
        image="/images/site/contact.jpg"
        crumb="Contact"
      />

      <ContactSection showHeader={false} />
    </>
  );
};

export default ContactPage;
