import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Auto-rotating image carousel with a soft cross-fade and dot indicators.
const ImageCarousel = ({ images = [], interval = 3800, className = '', rounded = 'rounded-3xl' }) => {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => setI((p) => (p + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images.length, interval]);

  if (!images.length) return null;

  return (
    <div className={`relative overflow-hidden shadow-2xl ${rounded} ${className}`}>
      <AnimatePresence mode="sync">
        <motion.img
          key={i}
          src={images[i].src}
          alt={images[i].alt || 'Oliveira Landscaping project'}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      {/* keeps the container height since images are absolute */}
      <img src={images[0].src} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-0" />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Show image ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${idx === i ? 'w-6 bg-brand-green-lime' : 'w-2 bg-white/70 hover:bg-white'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
