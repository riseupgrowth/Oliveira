import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, CheckCircle2, ArrowRight, Phone, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import CallToAction from '@/components/CallToAction';
import ProjectCard from '@/components/gallery/ProjectCard';
import { Button } from '@/components/ui/button';
import NotFoundPage from '@/pages/NotFoundPage';
import { SERVICE_BY_SLUG } from '@/data/services';
import { TOWNS } from '@/data/towns';
import { PROJECTS } from '@/data/gallery';
import { BUSINESS } from '@/data/site';
import { serviceSeo, serviceSchema, servicePath, townPath } from '@/lib/seo-pages';

const ServicePage = () => {
  const { slug } = useParams();
  const service = SERVICE_BY_SLUG[slug];
  if (!service) return <NotFoundPage />;

  const seo = serviceSeo(service);
  const projects = service.projects.map((s) => PROJECTS.find((p) => p.slug === s)).filter(Boolean);
  const heroImage = projects[0]?.cover.replace('-thumb.jpg', '.jpg') || '/images/site/hero.jpg';
  const related = service.related.map((s) => SERVICE_BY_SLUG[s]).filter(Boolean);

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={servicePath(service)} image={heroImage} schema={serviceSchema(service)} />

      {/* Header */}
      <section className="relative pt-36 pb-16 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" fetchpriority="high" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green-deep/90 via-brand-green-deep/80 to-brand-green-deep/95" />
        </div>
        <div className="container-tight relative z-10">
          <nav className="flex flex-wrap items-center gap-1.5 text-sm text-white/70 mb-5" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-green-lime">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-brand-green-lime">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-green-lime font-semibold">{service.name}</span>
          </nav>
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green-lime mb-3">{service.group}</span>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl mb-5">{service.headline}</h1>
          <p className="text-lg text-white/90 max-w-3xl leading-relaxed mb-8">{service.intro[0]}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact"><Button className="btn-custom-green text-base w-full sm:w-auto">Get a Free Estimate</Button></Link>
            <a href={BUSINESS.phoneHref}><Button className="btn-outline-light text-base w-full sm:w-auto"><Phone className="w-4 h-4" /> {BUSINESS.phoneDisplay}</Button></a>
          </div>
        </div>
      </section>

      {/* Overview + includes */}
      <section className="py-16 bg-white">
        <div className="container-tight grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-green-dark mb-4">What we do</h2>
            {service.intro.slice(1).map((para) => (
              <p key={para} className="text-lg text-gray-600 leading-relaxed mb-5">{para}</p>
            ))}
            <p className="text-lg text-gray-600 leading-relaxed">
              Oliveira Landscaping is a family-owned, licensed and insured company based in Bridgewater, with {BUSINESS.yearsExperience}+ years
              of experience across Boston&apos;s South Shore. Every job starts with a free, detailed estimate.
            </p>
          </div>
          <div className="lg:col-span-2 bg-brand-cream rounded-3xl p-7 border border-brand-sand">
            <h2 className="font-heading text-xl font-bold text-brand-green-dark mb-4">{service.name} includes</h2>
            <ul className="space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-brand-cream">
        <div className="container-tight">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-green-dark mb-8">How the job goes</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map(([title, text], i) => (
              <li key={title} className="bg-white rounded-2xl p-6 border border-brand-sand shadow-sm">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-green-dark text-white font-bold mb-4">{i + 1}</span>
                <h3 className="font-heading font-bold text-brand-green-dark mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Real projects */}
      {projects.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-tight">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-green-dark">
                {service.name} projects we&apos;ve completed
              </h2>
              <Link to="/gallery" className="text-brand-green font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Full gallery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* Towns + related services */}
      <section className="py-16 bg-brand-cream">
        <div className="container-tight grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-green-dark mb-4">{service.name} across the South Shore</h2>
            <div className="flex flex-wrap gap-2">
              {TOWNS.map((t) => (
                <Link
                  key={t.slug}
                  to={townPath(t)}
                  className="inline-flex items-center gap-1 bg-white text-brand-green-dark text-sm font-semibold px-3 py-1.5 rounded-full border border-brand-sand hover:bg-brand-sand"
                >
                  <MapPin className="w-3.5 h-3.5 text-brand-green" /> {t.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-green-dark mb-4">Related services</h2>
            <ul className="space-y-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to={servicePath(r)} className="group flex items-center justify-between bg-white rounded-2xl px-5 py-4 border border-brand-sand hover:shadow-md transition-shadow">
                    <span className="font-heading font-bold text-brand-green-dark">{r.name}</span>
                    <ArrowRight className="w-4 h-4 text-brand-green group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CallToAction
        title={`Ready to Start Your ${service.name} Project?`}
        subtitle="Tell us about your property and we'll put together a free, detailed estimate."
      />
    </>
  );
};

export default ServicePage;
