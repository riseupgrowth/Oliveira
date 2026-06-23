import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/site';

const CallToAction = ({
  title = 'Ready to Transform Your Outdoor Space?',
  subtitle = "Let's create the property you've always pictured. Contact our team today for your free, no-obligation estimate.",
}) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/site/cta.jpg" alt="Finished backyard concrete patio with outdoor seating at golden hour" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-green-deep/85" />
      </div>
      <div className="container-tight text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-lg md:text-xl text-white/85 mb-8 max-w-3xl mx-auto">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-brand-green-dark font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:bg-brand-cream transform hover:-translate-y-1 w-full sm:w-auto">
                Get Your Free Estimate
              </Button>
            </Link>
            <a href={BUSINESS.phoneHref} className="w-full sm:w-auto">
              <Button variant="outline" className="bg-transparent border-2 border-white text-white font-bold text-lg w-full px-8 py-6 rounded-full transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1">
                <Phone className="w-5 h-5 mr-2" /> {BUSINESS.phoneDisplay}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
