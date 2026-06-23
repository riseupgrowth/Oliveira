import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck, Award, HeartHandshake, Leaf, ClipboardCheck, Ruler,
  Hammer, Sparkles, Phone,
} from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { BUSINESS, STATS } from '@/data/site';

const VALUES = [
  { icon: Award, title: 'Craftsmanship', text: 'Every wall, walkway, and bed is built to last — with the kind of detail you only get from people who take pride in their trade.' },
  { icon: ShieldCheck, title: 'Integrity', text: 'Honest estimates, clear communication, and no surprises. Licensed, insured, and accountable from start to finish.' },
  { icon: HeartHandshake, title: 'Reliability', text: 'We show up when we say we will, respect your property, and leave every site cleaner than we found it.' },
  { icon: Leaf, title: 'Quality Materials', text: 'Premium mulch, stone, pavers, and plantings sourced to perform beautifully through every New England season.' },
];

const PROCESS = [
  { icon: Phone, step: '01', title: 'Free Consultation', text: 'We visit your property, listen to your goals, and provide a clear, detailed estimate — at no cost.' },
  { icon: Ruler, step: '02', title: 'Design & Plan', text: 'We map out layout, materials, and timeline so you know exactly what to expect before we break ground.' },
  { icon: Hammer, step: '03', title: 'Expert Build', text: 'Our fully equipped crews execute with precision, keeping you informed at every stage of the project.' },
  { icon: Sparkles, step: '04', title: 'Final Walkthrough', text: 'We clean up completely and walk the finished work with you to make sure every detail is right.' },
];

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us | Oliveira Landscaping Construction — South Shore MA"
        description="Meet Oliveira Landscaping Construction — a licensed, insured, family-run landscaping and hardscape company with 6+ years transforming South Shore properties. Learn our story, values, and process."
        path="/about"
        keywords="about Oliveira Landscaping, South Shore landscaping company, licensed insured landscapers MA, family owned landscaping Massachusetts"
        image="/images/site/about.jpg"
      />

      <PageHero
        title="About Oliveira Landscaping"
        subtitle="Craftsmanship, integrity, and a love for the outdoors — the foundation of every project we build on the South Shore."
        image="/images/site/why-choose.jpg"
        crumb="About Us"
      />

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container-tight grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <img src="/images/site/about.jpg" alt="Premium curb-appeal landscaping by Oliveira Landscaping Construction" className="rounded-3xl shadow-2xl w-full h-[560px] object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title mt-3 mb-6">Built on Hard Work and a Higher Standard</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Oliveira Landscaping Construction was founded on a simple belief: outdoor spaces should be
                built to the highest standard, by people who genuinely care. For more than six years, our
                team has been transforming yards, entrances, and backyards across Boston&apos;s South Shore.
              </p>
              <p>
                What started with a single truck and a relentless work ethic has grown into a fully equipped,
                full-service landscaping and hardscape company. Owner-led and detail-obsessed, we&apos;ve earned
                a reputation for showing up, working hard, and delivering results that homeowners are proud
                to show off.
              </p>
              <p>
                Today we specialize in landscaping, hardscape, paver patios, retaining walls, and outdoor
                living — handling each project with the same care we&apos;d give our own home.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/gallery"><Button className="btn-custom-green">See Our Work</Button></Link>
              <Link to="/contact"><Button className="btn-outline-dark">Get a Free Estimate</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #2f7d3a 0%, #14532d 100%)' }}>
        <div className="container-tight grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-heading text-4xl md:text-5xl font-extrabold text-brand-green-lime">{s.value}</p>
              <p className="text-white/85 mt-2 text-sm md:text-base">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-cream">
        <div className="container-tight">
          <div className="text-center mb-14">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="section-title mt-3">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-7 rounded-3xl shadow-md card-hover"
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
            <span className="eyebrow">How We Work</span>
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
