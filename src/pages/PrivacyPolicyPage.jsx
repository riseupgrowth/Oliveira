import React from 'react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import { BUSINESS } from '@/data/site';

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | Oliveira Landscaping Construction — South Shore MA"
        description="How Oliveira Landscaping Construction collects, uses, and protects the information you submit through our website. We never sell your information."
        path="/privacy"
        image="/images/site/about.jpg"
      />

      <PageHero
        title="Privacy Policy"
        subtitle="How we handle the information you share with us."
        image="/images/site/about.jpg"
        crumb="Privacy Policy"
      />

      <section className="py-20 bg-white">
        <div className="container-tight max-w-3xl legal-prose">
          <p className="text-sm text-gray-500">Last updated: July 21, 2026</p>

          <p>
            This Privacy Policy explains how {BUSINESS.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) collects, uses, and protects information you provide through
            our website at {BUSINESS.siteUrl}. We are a landscaping and construction
            company serving Boston&apos;s South Shore in Massachusetts.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We only collect the information you choose to give us through our contact and
            estimate-request form. This may include your name, phone number, email address,
            town, the service you are interested in, and any project details you write in
            your message. We do not require you to create an account, and we do not ask for
            payment information, government identifiers, or other sensitive data on this site.
          </p>
          <p>
            Like most websites, our hosting and content-delivery providers may automatically
            log basic technical data such as your IP address, browser type, and the pages you
            visit, for security and to keep the site running reliably.
          </p>

          <h2>How the Information Is Transmitted</h2>
          <p>
            When you submit the contact form, the information is sent over an encrypted (HTTPS)
            connection to a third-party form-delivery service (FormSubmit), which forwards the
            message to our business email inbox. We do not store your submission in a database
            on this website.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information you submit for one purpose only: to respond to your inquiry
            and to prepare and discuss a free estimate for the services you requested. We may
            contact you by phone, text message, or email to follow up on your request. We do
            not use your information for unrelated marketing without your consent.
          </p>

          <h2>We Do Not Sell Your Information</h2>
          <p>
            We do not sell, rent, or trade your personal information to third parties. We share
            it only with the service providers described below, and only as needed to operate
            the site and respond to you.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            To deliver this website and handle your request, we rely on a small number of
            third-party providers that may process your data or IP address:
          </p>
          <ul>
            <li><strong>Website hosting &amp; CDN</strong> — serves the site and may log IP addresses for security and performance.</li>
            <li><strong>FormSubmit</strong> — receives your contact-form submission and forwards it to our email inbox.</li>
            <li><strong>Google Fonts</strong> — loads the site&apos;s typography; may receive your IP address as part of the request.</li>
            <li><strong>Google (Business Profile &amp; reviews)</strong> — we display our public Google rating and link to our Google reviews.</li>
            <li><strong>Featurable</strong> — optionally displays our live Google reviews widget.</li>
          </ul>
          <p>
            These providers process data under their own privacy policies. We encourage you to
            review them if you would like more detail on their practices.
          </p>

          <h2>Your Rights</h2>
          <p>
            You may request access to the information you have submitted to us, ask us to
            correct it, or ask us to delete it. To make a request, contact us using the details
            below and we will respond within a reasonable time.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle your
            information, please reach out:
          </p>
          <p>
            {BUSINESS.name}<br />
            {BUSINESS.address.full}<br />
            Phone / Text: <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a><br />
            Email: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
