import React from 'react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import { BUSINESS } from '@/data/site';

const TermsPage = () => {
  return (
    <>
      <SEO
        title="Terms of Service | Oliveira Landscaping Construction — South Shore MA"
        description="The terms that apply to your use of the Oliveira Landscaping Construction website and our free estimate requests."
        path="/terms"
        image="/images/site/cta.jpg"
      />

      <PageHero
        title="Terms of Service"
        subtitle="The terms that apply when you use this website and request an estimate."
        image="/images/site/cta.jpg"
        crumb="Terms of Service"
      />

      <section className="py-20 bg-white">
        <div className="container-tight max-w-3xl legal-prose">
          <p className="text-sm text-gray-500">Last updated: July 21, 2026</p>

          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website of
            {' '}{BUSINESS.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) at
            {' '}{BUSINESS.siteUrl}. By using this website or submitting a request through it,
            you agree to these Terms.
          </p>

          <h2>Free, No-Obligation Estimates</h2>
          <p>
            We provide free estimates with no obligation to purchase. Requesting an estimate,
            or receiving one from us, does not commit you to hire us or commit us to perform
            any work.
          </p>

          <h2>Estimates and Pricing</h2>
          <p>
            Any prices, figures, or timelines we share before a signed agreement are estimates
            only and are subject to change after we assess the site and project scope in person.
            A final price becomes binding only when it is set out in a written agreement signed
            by both you and us.
          </p>

          <h2>The Contact Form Does Not Create a Contract</h2>
          <p>
            Submitting the contact or estimate-request form starts a conversation; it does not
            create a contract or a binding obligation on either party. A working relationship
            begins only once we have a mutually agreed, written scope of work.
          </p>

          <h2>Scheduling and Weather</h2>
          <p>
            Because our work is performed outdoors, timelines may be affected by weather, ground
            conditions, material availability, and other factors beyond our reasonable control.
            We will make reasonable efforts to keep you informed of any schedule changes.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website — including text, logos, photographs of our projects,
            and design — is the property of {BUSINESS.name} or is used with permission, and is
            protected by applicable intellectual-property laws. You may not copy, reproduce, or
            reuse it without our prior written permission.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            This website and its content are provided on an &ldquo;as is&rdquo; basis for
            general information. To the fullest extent permitted by law, we are not liable for
            any indirect or incidental damages arising from your use of, or inability to use,
            this website. Nothing in these Terms limits any liability that cannot be limited
            under applicable law.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Commonwealth of Massachusetts, without
            regard to its conflict-of-laws rules. Any dispute relating to this website or these
            Terms will be subject to the courts located in Massachusetts.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about these Terms? Contact us:
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

export default TermsPage;
