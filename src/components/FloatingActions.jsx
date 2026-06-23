import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, Plus } from 'lucide-react';
import { BUSINESS } from '@/data/site';

// Fixed floating quick-contact actions (Call + WhatsApp). Expands on mobile.
const FloatingActions = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {open && (
              <>
                <motion.a
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  href={BUSINESS.whatsappHref} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white font-semibold pl-4 pr-5 py-3 rounded-full shadow-xl hover:brightness-110 transition"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ delay: 0.05 }}
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-2 bg-brand-green text-white font-semibold pl-4 pr-5 py-3 rounded-full shadow-xl hover:bg-brand-green-dark transition"
                >
                  <Phone className="w-5 h-5" /> Call Now
                </motion.a>
              </>
            )}
          </AnimatePresence>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Quick contact"
            className="w-16 h-16 rounded-full bg-brand-green-dark text-white shadow-2xl flex items-center justify-center hover:bg-brand-green transition relative"
          >
            <span className="absolute inset-0 rounded-full bg-brand-green-lime/40 animate-ping" />
            <span className="relative">{open ? <X className="w-7 h-7" /> : <Phone className="w-7 h-7" />}</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActions;
