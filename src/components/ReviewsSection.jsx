import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink, PenLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GoogleIcon from '@/components/GoogleIcon';
import { TESTIMONIALS, BUSINESS } from '@/data/site';

// Loads the optional Featurable auto-updating Google reviews widget.
const FeaturableWidget = ({ id }) => {
  useEffect(() => {
    if (!id) return;
    const s = document.createElement('script');
    s.src = 'https://featurable.com/assets/js/widget.js';
    s.async = true;
    document.body.appendChild(s);
    return () => { document.body.removeChild(s); };
  }, [id]);
  return <div id={id} data-featurable-async className="w-full" />;
};

const ReviewsSection = () => {
  const { rating, reviewCount, reviewUrl, featurableWidgetId } = BUSINESS.google;

  return (
    <section id="reviews" className="relative py-24 bg-brand-cream overflow-hidden">
      <div className="absolute inset-0 bg-leaf-soft" />
      <div className="container-tight relative z-10">
        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="eyebrow justify-center">Reviews</span>
          <h2 className="section-title mt-3 mb-8">Loved by South Shore Homeowners</h2>

          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white rounded-3xl shadow-xl px-8 py-6 border border-brand-sand">
            <div className="flex items-center gap-4">
              <GoogleIcon className="w-10 h-10" />
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-4xl font-extrabold text-brand-green-dark leading-none">{rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-1">Based on {reviewCount}+ Google reviews</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-14 bg-gray-200" />
            <div className="flex flex-col gap-2">
              <a href={reviewUrl} target="_blank" rel="noopener noreferrer">
                <Button className="btn-custom-green text-sm w-full"><ExternalLink className="w-4 h-4" /> Read all reviews</Button>
              </a>
              <a href={reviewUrl} target="_blank" rel="noopener noreferrer">
                <Button className="btn-outline-dark text-sm w-full"><PenLine className="w-4 h-4" /> Leave a review</Button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Live auto-updating widget (if configured) OR curated reviews */}
        {featurableWidgetId ? (
          <FeaturableWidget id={featurableWidgetId} />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative bg-white rounded-2xl shadow-lg p-7 border border-brand-sand card-hover"
              >
                <Quote className="w-12 h-12 text-brand-green/10 absolute top-4 right-4" />
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <GoogleIcon className="w-5 h-5" />
                </div>
                <p className="text-gray-700 leading-relaxed mb-5 relative z-10">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-brand-green-dark text-white font-bold font-heading flex items-center justify-center">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold font-heading text-brand-green-dark leading-tight">{t.name}</p>
                    <p className="text-xs text-gray-400">Google Review</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
