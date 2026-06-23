import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

/**
 * Inner-page hero banner with background image, title, subtitle and breadcrumb.
 */
const PageHero = ({ title, subtitle, image, crumb }) => {
  return (
    <section className="relative pt-44 pb-24 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green-deep/85 via-brand-green-deep/70 to-brand-green-deep/85" />
      </div>
      <div className="container-tight relative z-10 text-center">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-1.5 text-sm text-white/70 mb-4"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-brand-green-lime transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-brand-green-lime font-semibold">{crumb || title}</span>
        </motion.nav>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-heading text-4xl md:text-6xl font-extrabold mb-4"
          style={{ textShadow: '0 4px 14px rgba(0,0,0,0.4)' }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
