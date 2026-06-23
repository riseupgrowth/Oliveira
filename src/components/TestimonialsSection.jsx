import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Quote, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GoogleIcon from '@/components/GoogleIcon';
import { TESTIMONIALS, BUSINESS } from '@/data/site';

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex((p) => (p === 0 ? TESTIMONIALS.length - 1 : p - 1));
  const handleNext = () => setIndex((p) => (p === TESTIMONIALS.length - 1 ? 0 : p + 1));

  const getVisible = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) visible.push(TESTIMONIALS[(index + i) % TESTIMONIALS.length]);
    return visible;
  };

  return (
    <section className="py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #2f7d3a 0%, #14532d 100%)' }}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="eyebrow !text-brand-green-lime">Reviews</span>
          <h2 className="section-title !text-white mt-3">What Our Clients Say</h2>
          <p className="section-subtitle !text-white/85 max-w-3xl mx-auto mt-4">
            Real stories from South Shore homeowners who trusted Oliveira with their outdoor transformations.
          </p>
        </motion.div>

        <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center mb-20">
          <Button onClick={handlePrev} size="icon" className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-16 z-10 rounded-full bg-white/10 hover:bg-white/20 text-white w-12 h-12">
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisible().map((t, i) => (
              <motion.div
                key={(index + i) % TESTIMONIALS.length}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`p-8 bg-white/8 backdrop-blur-lg rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex flex-col items-start text-left relative h-full ${i === 1 ? 'hidden md:flex' : ''} ${i === 2 ? 'hidden lg:flex' : ''}`}
              >
                <Quote className="w-16 h-16 text-white/15 absolute -top-6 -left-4" />
                <div className="flex items-center justify-between w-full mb-4">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                    <GoogleIcon className="w-4 h-4" />
                    <span className="text-xs font-semibold text-white/80">Google Review</span>
                  </div>
                </div>
                <p className="text-gray-100 text-lg mb-6 italic flex-grow">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-auto font-bold font-heading text-xl text-white">{t.name}</p>
              </motion.div>
            ))}
          </div>

          <Button onClick={handleNext} size="icon" className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-16 z-10 rounded-full bg-white/10 hover:bg-white/20 text-white w-12 h-12">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let&apos;s create the outdoor space you&apos;ve always pictured. Contact our team for a free,
            no-obligation estimate and experience the Oliveira difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-brand-green-dark font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:bg-brand-cream transform hover:-translate-y-1 w-full sm:w-auto">
                Get Your Free Estimate
              </Button>
            </Link>
            <a href={BUSINESS.phoneHref} className="w-full sm:w-auto">
              <Button variant="outline" className="bg-transparent border-2 border-white text-white font-bold text-lg w-full px-8 py-6 rounded-full transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1">
                <Phone className="w-5 h-5 mr-2" /> Call Us Now
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
