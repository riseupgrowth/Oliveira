import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Award, ShieldCheck, Users, Star } from 'lucide-react';
import ImageCarousel from '@/components/ImageCarousel';
import { ABOUT_GALLERY } from '@/data/site';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-leaf-soft" />
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-[40rem] h-[40rem] bg-brand-cream rounded-full opacity-70" />

      <div className="container-tight relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
<ImageCarousel images={ABOUT_GALLERY} className="w-full h-[540px]" />
            <div className="absolute -bottom-6 -right-6 bg-brand-green-dark text-white rounded-2xl px-7 py-5 shadow-xl hidden sm:block">
              <p className="font-heading text-4xl font-extrabold leading-none">16+</p>
              <p className="text-sm text-white/80 mt-1">Years Serving<br />the South Shore</p>
            </div>
            <div className="absolute -top-5 -left-5 bg-white rounded-2xl px-5 py-3 shadow-xl hidden sm:flex items-center gap-2 border border-brand-sand">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
              <span className="font-bold text-brand-green-dark text-sm">5.0 · 45 reviews</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <span className="eyebrow">About Oliveira</span>
            <h2 className="section-title mt-3 mb-6">A Family Name You Can Build On</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                For over <strong>16 years</strong>, Oliveira Landscaping Construction has been a
                family-owned, owner-operated company transforming properties across Boston&apos;s South Shore.
                We&apos;re fully <strong>licensed and insured</strong> — and we treat every yard as if it were our own.
              </p>
              <p>
                We&apos;re committed to one thing above all: <strong>results you can be proud of</strong>. From
                paver patios and natural-stone retaining walls to lush lawns and complete outdoor living spaces,
                our crews show up on time, communicate clearly, and never cut corners.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-5">
              <div className="flex items-center gap-3 text-brand-green-dark">
                <Users className="w-8 h-8" />
                <span className="font-bold font-heading">Family-Owned</span>
              </div>
              <div className="flex items-center gap-3 text-brand-green-dark">
                <ShieldCheck className="w-8 h-8" />
                <span className="font-bold font-heading">Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-3 text-brand-green-dark">
                <Award className="w-8 h-8" />
                <span className="font-bold font-heading">Results Guaranteed</span>
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
