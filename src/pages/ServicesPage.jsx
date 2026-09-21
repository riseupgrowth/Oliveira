import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CallToAction from '@/components/CallToAction';
import { SERVICE_PAGES } from '@/data/services';
import { PROJECTS } from '@/data/gallery';
import { servicePath } from '@/lib/seo-pages';

const GROUPS = ['Hardscape & Masonry', 'Patios & Outdoor Living', 'Landscaping & Lawn Care'];

const ServicesPage = () => (
  <>
    <SEO
      title="Landscaping & Hardscape Services | South Shore MA | Oliveira"
      description="Paver patios, retaining walls, concrete patios, plantings, mulching, lawn care, grading and tree removal across the South Shore, MA. Free estimates."
      path="/services"
      image="/images/site/cta.jpg"
    />

    <PageHero
      title="Our Services"
      subtitle="Landscaping, hardscape and outdoor living — designed, built and maintained by one local crew."
      image="/images/site/cta.jpg"
      crumb="Services"
    />

    <section className="py-16 bg-brand-cream">
      <div className="container-tight space-y-14">
        {GROUPS.map((group) => (
          <div key={group}>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-green-dark mb-6">{group}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {SERVICE_PAGES.filter((s) => s.group === group).map((s) => {
                const cover = PROJECTS.find((p) => p.slug === s.projects[0])?.cover;
                return (
                  <Link
                    key={s.slug}
                    to={servicePath(s)}
                    className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-brand-sand transition-shadow"
                  >
                    {cover && (
                      <div className="aspect-[4/3] overflow-hidden bg-brand-sand">
                        <img src={cover} alt={`${s.name} by Oliveira Landscaping`} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                    )}
                    <div className="flex flex-col flex-1 p-5">
                      <h3 className="font-heading text-lg font-bold text-brand-green-dark mb-2">{s.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">{s.intro[0]}</p>
                      <span className="mt-auto inline-flex items-center gap-1 text-brand-green font-semibold text-sm group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>

    <CallToAction
      title="Not Sure Which Service You Need?"
      subtitle="Tell us what's going on with your property and we'll recommend the right approach — free."
    />
  </>
);

export default ServicesPage;
