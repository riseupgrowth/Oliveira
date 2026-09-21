import React, { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { STAGES } from '@/lib/gallery';

/**
 * Full-screen image lightbox with a thumbnail strip, stage badge,
 * keyboard (← → Esc) and swipe navigation.
 * props: images [{src, thumb, caption, stage}], index, onClose, onPrev, onNext, onSelect
 */
const Lightbox = ({ images, index, onClose, onPrev, onNext, onSelect }) => {
  const open = index !== null && index >= 0;
  const touchX = useRef(null);
  const strip = useRef(null);

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

  // Keep the active thumbnail in view.
  useEffect(() => {
    if (!open || !strip.current) return;
    strip.current.querySelector(`[data-i="${index}"]`)?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [open, index]);

  if (!open) return null;
  const img = images[index];
  if (!img) return null;
  const stage = STAGES[img.stage];

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 45) (dx > 0 ? onPrev : onNext)();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Project photo viewer"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 md:px-6 py-3 text-white/80 text-sm" onClick={(e) => e.stopPropagation()}>
          <span className="font-semibold tabular-nums">{index + 1} / {images.length}</span>
          <button
            onClick={onClose}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image */}
        <div className="relative flex-1 min-h-0 flex items-center justify-center px-2 md:px-20" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="hidden sm:flex absolute left-3 md:left-6 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <motion.figure
            key={img.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={img.src}
                alt={img.caption}
                className="max-h-[calc(100vh-15rem)] w-auto max-w-full rounded-lg object-contain"
              />
              {stage && (
                <span className={`absolute top-3 left-3 ${stage.badge} text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow`}>
                  {stage.label}
                </span>
              )}
            </div>
            <figcaption className="mt-3 text-center text-white/90 text-sm md:text-base max-w-2xl px-4">{img.caption}</figcaption>
          </motion.figure>

          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="hidden sm:flex absolute right-3 md:right-6 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div ref={strip} className="overflow-x-auto px-4 py-3" onClick={(e) => e.stopPropagation()}>
          <div className="flex gap-2 w-max mx-auto">
          {images.map((im, i) => (
            <button
              key={im.src}
              data-i={i}
              onClick={() => onSelect?.(i)}
              className={`relative shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden transition-all ${
                i === index ? 'ring-2 ring-white opacity-100' : 'opacity-50 hover:opacity-90'
              }`}
              aria-label={`Show photo ${i + 1}`}
            >
              <img src={im.thumb || im.src} alt="" loading="lazy" className="w-full h-full object-cover" />
              <span className={`absolute bottom-0 inset-x-0 h-1 ${STAGES[im.stage]?.dot || ''}`} />
            </button>
          ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
