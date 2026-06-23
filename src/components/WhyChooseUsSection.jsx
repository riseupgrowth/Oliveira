import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, Truck, ClipboardList, CalendarCheck, Award, Star, MapPin } from 'lucide-react';
import { WHY_CHOOSE } from '@/data/site';

const ICONS = { ShieldCheck, Layers, Truck, ClipboardList, CalendarCheck, Award, Star, MapPin };

const duplicated = [...WHY_CHOOSE, ...WHY_CHOOSE];

const marqueeVariants = {
  animate: {
    x: [0, -1536],
    transition: { x: { repeat: Infinity, repeatType: 'loop', duration: 32, ease: 'linear' } },
  },
};

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: 'url(/images/site/why-choose.jpg)' }}
        role="img"
        aria-label="Oliveira Landscaping crew restoring a natural granite stone retaining wall"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-green-deep/95 via-brand-green-deep/88 to-brand-green-deep/97" />
      <div className="absolute inset-0 z-0 bg-black/45" />
      <div className="absolute inset-0 z-0 bg-topo-lime opacity-25" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="eyebrow !text-brand-green-lime">The Oliveira Difference</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-5 mt-3 text-white text-shadow-strong">Why Homeowners Choose Us</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 text-shadow-soft">
            The right team makes all the difference. We pair real craftsmanship with dependable service
            to deliver outdoor results that exceed expectations — every project, every time.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden mt-12">
        <motion.div className="flex" variants={marqueeVariants} animate="animate">
          {duplicated.map((feature, index) => {
            const Icon = ICONS[feature.icon] || Star;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-[180px] h-[180px] flex flex-col items-center justify-center text-center p-4 mx-3 bg-brand-green-deep/55 backdrop-blur-md rounded-3xl border border-white/15 shadow-xl"
                style={{ willChange: 'transform' }}
              >
                <Icon className="w-11 h-11 text-brand-green-lime mb-3" />
                <span className="font-semibold text-white text-base leading-tight">{feature.text}</span>
              </div>
            );
          })}
        </motion.div>
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-brand-green-deep to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-brand-green-deep to-transparent" />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
