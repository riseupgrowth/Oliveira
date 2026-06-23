import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sprout, Hammer, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const STEPS = [
  { icon: Sprout, label: 'Vision & Design', text: 'We plan every line, grade, and plant before a shovel hits the ground.' },
  { icon: Hammer, label: 'Expert Build', text: 'Skilled crews and the right equipment bring the design to life.' },
  { icon: Sparkles, label: 'Stunning Finish', text: 'A flawless, fully cleaned-up space ready to be enjoyed for years.' },
];

// Clean cinematic section: a fixed-attachment parallax background with a strong
// dark overlay so the copy is always readable. Content reveals once (no scrub jank).
const ParallaxShowcase = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden text-white">
      {/* Parallax background (fixed) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: 'url(/images/site/cta.jpg)' }}
      />
      {/* Readability overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/65 to-black/82" />
      <div className="absolute inset-0 z-0 bg-brand-green-deep/45" />
      <div className="absolute inset-0 z-0 bg-topo-lime opacity-20" />

      <div className="container-tight relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow !text-brand-green-lime justify-center">Our Process</span>
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold mt-4 mb-5 max-w-4xl mx-auto leading-tight text-shadow-strong">
            From Bare Ground to Breathtaking
          </h2>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-16 text-shadow-soft">
            Every Oliveira project follows the same proven path — thoughtful design,
            skilled construction, and a finish that turns heads.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* connecting line on desktop */}
          <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-brand-green-lime/50 to-transparent" />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-brand-green-deep/55 backdrop-blur-md border border-white/15 rounded-3xl p-7 text-left shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-green-lime text-brand-green-dark flex items-center justify-center font-heading font-extrabold text-xl shadow-lg">
                  {i + 1}
                </div>
                <s.icon className="w-7 h-7 text-brand-green-lime" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2 text-shadow-soft">{s.label}</h3>
              <p className="text-white/90 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
        >
          <Link to="/gallery"><Button className="btn-lime text-lg">See the Transformations</Button></Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxShowcase;
