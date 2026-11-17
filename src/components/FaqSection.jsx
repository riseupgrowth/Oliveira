import React from 'react';
import { ChevronRight } from 'lucide-react';
import RichText from '@/components/blog/RichText';

/** Accordion FAQ using native <details>, so answers are in the HTML for crawlers. */
const FaqSection = ({ items, title = 'Frequently Asked Questions', eyebrow = 'FAQ' }) => (
  <section className="py-20 bg-white" aria-labelledby="faq-title">
    <div className="container-tight max-w-4xl">
      <div className="text-center mb-10">
        <span className="eyebrow">{eyebrow}</span>
        <h2 id="faq-title" className="section-title mt-3">{title}</h2>
      </div>
      <div className="space-y-3">
        {items.map(([q, a]) => (
          <details key={q} className="group bg-brand-cream border border-brand-sand rounded-2xl p-5 md:p-6 open:shadow-sm">
            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
              <h3 className="font-heading font-bold text-brand-green-dark text-base md:text-lg">{q}</h3>
              <ChevronRight className="w-5 h-5 shrink-0 mt-1 text-brand-green transition-transform group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed"><RichText text={a} /></p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FaqSection;
