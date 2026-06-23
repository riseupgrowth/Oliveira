import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck, Award, HeartHandshake, Leaf, ClipboardCheck, Ruler,
  Hammer, Sparkles, Phone, Users, Star,
} from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CallToAction from '@/components/CallToAction';
import StatsBand from '@/components/StatsBand';
import { Button } from '@/components/ui/button';
import ImageCarousel from '@/components/ImageCarousel';
import { BUSINESS, ABOUT_GALLERY } from '@/data/site';

const VALUES = [
  { icon: Users, title: 'Family-Owned', text: 'A real family business — owner-led, personally accountable, and invested in our neighbors’ homes.' },
  { icon: Award, title: 'Craftsmanship', text: 'Every wall, walkway, and bed is built to last, with the detail you only get from people who take pride in their trade.' },
  { icon: ShieldCheck, title: 'Licensed & Insured', text: 'Fully licensed and insured, so your property and your investment are always protected.' },
  { icon: HeartHandshake, title: 'Committed to Results', text: 'We don’t leave until it’s right. Your satisfaction is the only acceptable finish line.' },
];

const PROCESS = [
  { icon: Phone, step: '01', title: 'Free Consultation', text: 'We visit your property, listen to your goals, and provide a clear, detailed estimate — at no cost.' },
  { icon: Ruler, step: '02', title: 'Design & Plan', text: 'We map out layout, materials, and timeline so you know exactly what to expect before we break ground.' },
  { icon: Hammer, step: '03', title: 'Expert Build', text: 'Our fully equipped crews execute with precision, keeping you informed at every stage.' },
  { icon: Sparkles, step: '04', title: 'Final Walkthrough', text: 'We clean up completely and walk the finished work with you to make sure every detail is right.' },
];

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us | Oliveira Landscaping Construction — South Shore MA"
        description="Meet Oliveira Landscaping Construction — a family-owned, licensed & insured landscaping and hardscape company with 11+ years and 1,500+ projects across Boston's South Shore. Our story, values, and process."
        path="/about"
        keywords="about Oliveira Landscaping, family owned landscaping South Shore, licensed insured landscapers MA, 11 years landscaping Massachusetts"
        image="/images/site/about.jpg"
      />

      <PageHero
        title="Family-Owned. Results-Driven."
        subtitle="Eleven years, 1,500+ projects, and one standard: outdoor spaces our South Shore neighbors are proud to call their own."
        image="/images/site/why-choose.jpg"
        crumb="About Us"
      />

      {/* Story */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-leaf-soft" />
        <div className="container-tight relative z-10 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <ImageCarousel images={ABOUT_GALLERY} className="w-full h-[560px]" />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-2 border border-brand-sand">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
              <span className="font-bold text-brand-green-dark text-sm">5.0 on Google</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title mt-3 mb-6">Built on Hard Work, Trust, and Family</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Oliveira Landscaping Construction started with a single truck, a strong work ethic, and a
                promise: to treat every customer&apos;s property like family. More than <strong>11 years</strong> later,
                we&apos;ve completed over <strong>1,500 projects</strong> across Boston&apos;s South Shore — and that
                promise hasn&apos;t changed.
              </p>
              <p>
                We&apos;re a <strong>family-owned, owner-operated</strong> company, which means the person who
                quotes your job is invested in how it turns out. We&apos;re <strong>fully licensed and insured</strong>,
                we communicate every step of the way, and we stand behind our work.
              </p>
              <p className="font-semibold text-brand-green-dark">
                Our reputation is built one yard, one handshake, and one five-star review at a time.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/gallery"><Button className="btn-custom-green">See Our Work</Button></Link>
              <a href={BUSINESS.google.reviewUrl} target="_blank" rel="noopener noreferrer"><Button className="btn-outline-dark">Read Our Reviews</Button></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated stats */}
      <StatsBand />

      {/* Values */}
      <section className="relative py-24 bg-brand-cream overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="container-tight relative z-10">
          <div className="text-center mb-14">
            <span className="eyebrow justify-center">What We Stand For</span>
            <h2 className="section-title mt-3">The Values Behind Every Project</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-7 rounded-3xl shadow-md card-hover border border-brand-sand"
              >
                <div className="w-14 h-14 bg-brand-green-dark rounded-2xl flex items-center justify-center mb-5">
                  <v.icon className="w-7 h-7 text-brand-green-lime" />
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-green-dark mb-2">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="container-tight">
          <div className="text-center mb-14">
            <span className="eyebrow justify-center">How We Work</span>
            <h2 className="section-title mt-3">A Simple, Transparent Process</h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-4">From first call to final walkthrough, we make working with us easy.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-brand-cream rounded-3xl p-7 border border-brand-sand"
              >
                <span className="absolute top-5 right-6 font-heading text-5xl font-extrabold text-brand-green/10">{p.step}</span>
                <div className="w-14 h-14 bg-brand-green-dark rounded-2xl flex items-center justify-center mb-5">
                  <p.icon className="w-7 h-7 text-brand-green-lime" />
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-green-dark mb-2">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12 flex items-center justify-center gap-2 text-brand-green-dark font-semibold">
            <ClipboardCheck className="w-5 h-5" />
            Free, detailed estimates — call {BUSINESS.phoneDisplay}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default AboutPage;
