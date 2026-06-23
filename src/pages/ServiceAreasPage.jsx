import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Truck, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { SERVICE_AREAS, ALL_TOWNS, BUSINESS } from '@/data/site';

const PERKS = [
  { icon: Truck, title: 'Local, Fully Equipped Crews', text: 'Based in Bridgewater with the equipment and team to handle projects of any size, fast.' },
  { icon: Clock, title: 'Quick Response Times', text: 'Because we work throughout the South Shore daily, we can get to your property quickly.' },
  { icon: MapPin, title: 'Neighborhood Knowledge', text: 'We understand South Shore soil, drainage, and the New England seasons that shape great landscaping.' },
];

const ServiceAreasPage = () => {
  return (
    <>
      <SEO
        title="Service Areas | Landscaping Across Boston's South Shore | Oliveira"
        description="Oliveira Landscaping serves 30+ South Shore MA towns including Quincy, Braintree, Weymouth, Hingham, Scituate, Marshfield, Plymouth, Bridgewater & more. Local landscaping & hardscape. Free estimates."
        path="/service-areas"
        keywords="landscaping service areas South Shore MA, landscapers Quincy, Hingham landscaping, Plymouth landscaping, Marshfield hardscape, Bridgewater landscaping, Weymouth lawn care, Scituate retaining walls"
        image="/images/site/service-areas.jpg"
      />

      <PageHero
        title="Serving Boston's South Shore"
        subtitle="From the coast to the countryside — premium landscaping and hardscape across more than 30 South Shore communities."
        image="/images/site/service-areas.jpg"
        crumb="Service Areas"
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container-tight max-w-4xl text-center">
          <span className="eyebrow">Where We Work</span>
          <h2 className="section-title mt-3 mb-6">Local Landscaping You Can Count On</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Oliveira Landscaping Construction is proud to call the South Shore home. From our base in
            Bridgewater, our crews travel throughout Norfolk and Plymouth counties to design, build, and
            maintain beautiful outdoor spaces. Whether you own a coastal property in Scituate, a colonial
            in Hingham, or a family home in Brockton, you get the same high standard of craftsmanship and
            service. If you don&apos;t see your town listed below, reach out — chances are we serve it too.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="pb-8 bg-white">
        <div className="container-tight grid md:grid-cols-3 gap-7">
          {PERKS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-brand-cream rounded-3xl p-7 border border-brand-sand"
            >
              <div className="w-14 h-14 bg-brand-green-dark rounded-2xl flex items-center justify-center mb-5">
                <p.icon className="w-7 h-7 text-brand-green-lime" />
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-green-dark mb-2">{p.title}</h3>
              <p className="text-gray-600 leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Town groups */}
      <section className="py-20 bg-white">
        <div className="container-tight space-y-12">
          {SERVICE_AREAS.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: gi * 0.05 }}
              className="rounded-3xl border border-brand-sand overflow-hidden"
            >
              <div className="bg-brand-green-dark text-white px-8 py-6">
                <h3 className="font-heading text-2xl font-bold">{group.group}</h3>
                <p className="text-white/80 mt-1">{group.blurb}</p>
              </div>
              <div className="p-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {group.towns.map((town) => (
                  <div key={town} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span className="font-medium">{town}, MA</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO map-style strip */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #2f7d3a 0%, #14532d 100%)' }}>
        <div className="container-tight text-center text-white">
          <h2 className="font-heading text-3xl font-bold mb-4">Full List of Towns We Serve</h2>
          <p className="text-white/85 max-w-4xl mx-auto leading-relaxed mb-8">{ALL_TOWNS.map((t) => `${t}, MA`).join(' · ')}</p>
          <Link to="/contact"><Button className="bg-white text-brand-green-dark font-bold px-8 py-3 rounded-full hover:bg-brand-cream">Check Availability for Your Town</Button></Link>
        </div>
      </section>

      <CallToAction
        title="Premium Landscaping, Right in Your Neighborhood"
        subtitle={`Call ${BUSINESS.phoneDisplay} or request a free estimate online — we'll be there before you know it.`}
      />
    </>
  );
};

export default ServiceAreasPage;
