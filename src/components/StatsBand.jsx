import React from 'react';
import { motion } from 'framer-motion';
import Counter from '@/components/Counter';
import { STATS } from '@/data/site';

// Reusable stat band with animated counters over a textured deep-green background.
const StatsBand = () => {
  return (
    <section className="relative py-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #14532d 0%, #0f3d22 100%)' }}>
      <div className="absolute inset-0 bg-topo-lime opacity-70" />
      <div className="container-tight relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Counter
              value={s.value}
              suffix={s.suffix}
              className="font-heading text-4xl md:text-6xl font-extrabold text-brand-green-lime block"
            />
            <p className="text-white/85 mt-2 text-sm md:text-base font-medium">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsBand;
