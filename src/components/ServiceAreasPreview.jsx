import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ALL_TOWNS } from '@/data/site';

const ServiceAreasPreview = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(#14532d 1px, transparent 1px)', backgroundSize: '22px 22px' }}
      />
      <div className="container-tight relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">Where We Work</span>
            <h2 className="section-title mt-3 mb-5">Proudly Serving Boston&apos;s South Shore</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              From our home base in Bridgewater, our crews serve more than 30 communities across the
              South Shore — coastal towns, established estates, and everything in between. Wherever you
              are in the region, premium landscaping is close by.
            </p>
            <Link to="/service-areas">
              <Button className="btn-custom-green">
                Explore All Service Areas <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-wrap gap-2.5"
          >
            {ALL_TOWNS.map((town) => (
              <span
                key={town}
                className="inline-flex items-center gap-1.5 bg-brand-cream text-brand-green-dark font-semibold text-sm px-4 py-2 rounded-full border border-brand-sand"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-green" /> {town}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasPreview;
