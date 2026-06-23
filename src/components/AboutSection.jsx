import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Award, ShieldCheck, Clock } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-brand-cream rounded-full" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[50rem] h-[50rem] border-4 border-gray-100 rounded-full" />

      <div className="container-tight relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <img
              className="rounded-3xl shadow-2xl w-full h-[520px] object-cover"
              alt="Dramatic curb-appeal landscaping with red mulch beds and a crushed-stone driveway by Oliveira Landscaping"
              src="/images/site/about.jpg"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-green-dark text-white rounded-2xl px-7 py-5 shadow-xl hidden sm:block">
              <p className="font-heading text-4xl font-extrabold leading-none">6+</p>
              <p className="text-sm text-white/80 mt-1">Years Serving<br />the South Shore</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <span className="eyebrow">About Oliveira</span>
            <h2 className="section-title mt-3 mb-6">Craftsmanship You Can See — and Trust</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Oliveira Landscaping Construction brings over six years of hands-on experience transforming
                outdoor spaces across Boston&apos;s South Shore. Our licensed and insured crews specialize in
                landscaping, hardscape, and custom outdoor living — delivering results that are reliable,
                durable, and beautifully finished.
              </p>
              <p>
                From paver patios and natural-stone retaining walls to fresh garden beds and seasonal
                maintenance, we treat every property as if it were our own — with care, professionalism,
                and a relentless attention to detail.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-5">
              <div className="flex items-center gap-3 text-brand-green-dark">
                <Award className="w-8 h-8" />
                <span className="font-bold font-heading">High-Quality Work</span>
              </div>
              <div className="flex items-center gap-3 text-brand-green-dark">
                <ShieldCheck className="w-8 h-8" />
                <span className="font-bold font-heading">Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-3 text-brand-green-dark">
                <Clock className="w-8 h-8" />
                <span className="font-bold font-heading">Reliable &amp; On-Time</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/about"><Button className="btn-dark text-base">Our Story</Button></Link>
              <Link to="/contact"><Button className="btn-outline-dark text-base">Request a Consultation</Button></Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
