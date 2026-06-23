import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Hammer, LayoutGrid, ShieldCheck, Tag, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/data/site';

const ICONS = { Leaf, Hammer, LayoutGrid };

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #2f7d3a 0%, #14532d 100%)' }}
    >
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-white/10 rounded-full" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[50rem] h-[50rem] border-4 border-white/10 rounded-full" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="eyebrow !text-brand-green-lime">What We Do</span>
          <h2 className="section-title !text-white mt-3">Complete Outdoor Solutions, Built to Last</h2>
          <p className="section-subtitle max-w-3xl mx-auto !text-white/90 mt-4">
            From design to the final detail, we deliver landscaping and hardscape that enhance your
            property&apos;s beauty, function, and value — across the entire South Shore.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon] || Leaf;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white p-8 rounded-3xl shadow-lg flex flex-col card-hover"
              >
                <div className="flex-grow">
                  <div className="flex items-center justify-center w-16 h-16 bg-brand-green-dark rounded-2xl mx-auto mb-6">
                    <Icon className="w-8 h-8 text-brand-green-lime" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-brand-green-dark mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-500 text-center mb-6">{service.intro}</p>
                  <ul className="space-y-3 mb-8">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-brand-green mt-0.5 font-bold">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="mt-auto">
                  <Button className="w-full btn-custom-green text-base">Get Your Free Estimate</Button>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white"
        >
          <div className="flex flex-col items-center gap-2 p-5 bg-white/10 rounded-2xl">
            <ShieldCheck className="w-8 h-8 text-brand-green-lime" />
            <span className="font-bold font-heading text-lg">Licensed &amp; Insured</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-5 bg-white/10 rounded-2xl">
            <Tag className="w-8 h-8 text-brand-green-lime" />
            <span className="font-bold font-heading text-lg">Free Estimates</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-5 bg-white/10 rounded-2xl">
            <MapPin className="w-8 h-8 text-brand-green-lime" />
            <span className="font-bold font-heading text-lg">Serving All South Shore</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
