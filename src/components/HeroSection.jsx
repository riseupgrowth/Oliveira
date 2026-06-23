import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Star, ShieldCheck } from 'lucide-react';

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[640px] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75 z-10" />
        <img
          className="w-full h-full object-cover"
          alt="Oliveira Landscaping front-yard transformation with red mulch beds, sculpted shrubs and a crushed-stone driveway on the South Shore of Massachusetts"
          src="/images/site/hero.jpg"
        />
      </div>

      <div className="relative z-20 container-tight text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold"
        >
          <span className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-brand-green-lime text-brand-green-lime" />
            ))}
          </span>
          Top-rated South Shore landscapers
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-heading text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-[1.05] max-w-5xl mx-auto"
          style={{ textShadow: '0 4px 18px rgba(0,0,0,0.55)' }}
        >
          Outdoor Spaces That Turn Heads on the South Shore
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-100"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
        >
          Expert landscaping, hardscape, patios, and retaining walls that add lasting beauty
          and value to your property — designed and built to the highest standard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/contact">
            <Button className="btn-custom-green text-lg w-full sm:w-auto">Get a Free Estimate</Button>
          </Link>
          <Link to="/gallery">
            <Button className="btn-outline-light text-lg w-full sm:w-auto">See Our Work</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/85"
        >
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-green-light" /> Licensed &amp; Insured</span>
          <span className="flex items-center gap-2"><Star className="w-4 h-4 text-brand-green-light" /> 11+ Years Experience</span>
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-green-light" /> Free Detailed Estimates</span>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="absolute bottom-8 z-20 flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300 group"
        aria-label="Scroll down"
      >
        <span className="mb-1 text-xs font-semibold tracking-widest uppercase">Explore</span>
        <ArrowDown className="w-7 h-7 group-hover:animate-bounce" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
