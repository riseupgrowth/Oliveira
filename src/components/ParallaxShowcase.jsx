import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sprout, Hammer, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const STEPS = [
  { icon: Sprout, label: 'Vision & Design', text: 'We plan every line, grade, and plant before a shovel hits the ground.' },
  { icon: Hammer, label: 'Expert Build', text: 'Skilled crews and the right equipment bring the design to life.' },
  { icon: Sparkles, label: 'Stunning Finish', text: 'A flawless, fully cleaned-up space ready to be enjoyed for years.' },
];

// Scroll-driven cinematic section: the background image zooms/parallaxes
// and the content reveals as the user scrolls through it.
const ParallaxShowcase = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 0.6, 0.85]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], ['40px', '0px']);
  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden text-white">
      <motion.div style={{ scale: imageScale, y: imageY }} className="absolute inset-0 z-0 will-change-transform">
        <img
          src="/images/site/cta.jpg"
          alt="Oliveira Landscaping backyard transformation at golden hour"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 z-10 bg-gradient-to-b from-brand-green-deep via-black/50 to-brand-green-deep" />
      <div className="absolute inset-0 z-10 bg-topo-lime opacity-40" />

      <div className="container-tight relative z-20 text-center py-24">
        <motion.div style={{ y: titleY, opacity: titleOpacity }}>
          <span className="eyebrow !text-brand-green-lime justify-center">Our Process</span>
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold mt-4 mb-5 max-w-4xl mx-auto leading-tight text-shadow-strong">
            From Bare Ground to Breathtaking
          </h2>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-14 text-shadow-soft">
            Every Oliveira project follows the same proven path — thoughtful design,
            skilled construction, and a finish that turns heads.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {STEPS.map((s, i) => {
            const start = 0.2 + i * 0.18;
            return (
              <ScrollStep key={s.label} progress={scrollYProgress} start={start} icon={s.icon} index={i + 1} label={s.label} text={s.text} />
            );
          })}
        </div>

        <motion.div style={{ opacity: titleOpacity }} className="mt-14">
          <Link to="/gallery">
            <Button className="btn-lime text-lg">See the Transformations</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ScrollStep = ({ progress, start, icon: Icon, index, label, text }) => {
  const opacity = useTransform(progress, [start, start + 0.15], [0, 1]);
  const y = useTransform(progress, [start, start + 0.15], [50, 0]);
  return (
    <motion.div
      style={{ opacity, y }}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 text-left"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-brand-green-lime text-brand-green-dark flex items-center justify-center font-heading font-extrabold">
          {index}
        </div>
        <Icon className="w-7 h-7 text-brand-green-lime" />
      </div>
      <h3 className="font-heading text-xl font-bold mb-2">{label}</h3>
      <p className="text-white/85 leading-relaxed">{text}</p>
    </motion.div>
  );
};

export default ParallaxShowcase;
