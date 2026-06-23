import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { STAGE_LABELS } from '@/data/gallery';

/**
 * Full-screen image lightbox.
 * props: images [{src, caption, stage}], index, onClose, onPrev, onNext
 */
const Lightbox = ({ images, index, onClose, onPrev, onNext }) => {
  const open = index !== null && index >= 0;

  const handleKey = useCallback(
    (e) => {
      if (!open) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [open, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;
  const img = images[index];
  if (!img) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-3 md:left-6 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-3 md:right-6 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        <motion.figure
          key={img.src}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="max-w-5xl w-full flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={img.src}
            alt={img.caption}
            className="max-h-[78vh] w-auto max-w-full rounded-xl shadow-2xl object-contain"
          />
          <figcaption className="mt-4 text-center text-white/90 max-w-2xl">
            {img.stage && (
              <span className="inline-block mb-2 text-xs font-bold uppercase tracking-widest text-brand-green-lime">
                {STAGE_LABELS[img.stage] || ''}
              </span>
            )}
            <p className="text-sm md:text-base">{img.caption}</p>
            <p className="text-xs text-white/50 mt-1">{index + 1} / {images.length}</p>
          </figcaption>
        </motion.figure>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
