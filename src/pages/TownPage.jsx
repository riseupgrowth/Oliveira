import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, MapPin, ArrowRight, Phone, Truck, ShieldCheck, ClipboardList } from 'lucide-react';
import SEO from '@/components/SEO';
import CallToAction from '@/components/CallToAction';
import ProjectCard from '@/components/gallery/ProjectCard';
import { Button } from '@/components/ui/button';
import NotFoundPage from '@/pages/NotFoundPage';
import { TOWN_BY_SLUG } from '@/data/towns';
import { SERVICE_PAGES } from '@/data/services';
import { PROJECTS } from '@/data/gallery';
import { SERVICE_AREAS, BUSINESS } from '@/data/site';
import { townSeo, townSchema, townPath, servicePath } from '@/lib/seo-pages';

const TownPage = () => {
  const { slug } = useParams();
  const town = TOWN_BY_SLUG[slug];
  if (!town) return <NotFoundPage />;

  const seo = townSeo(town);
  const isHome = town.miles <= 1;
  const group = SERVICE_AREAS.find((g) => g.group === town.group);
  const localProjects = PROJECTS.filter((p) => p.location.startsWith(`${town.name},`));
  const showcase = localProjects.length ? localProjects : PROJECTS.slice(0, 3);
  const neighbors = town.neighbors.map((s) => TOWN_BY_SLUG[s]).filter(Boolean);

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={townPath(town)} image="/images/site/service-areas.jpg" schema={townSchema(town)} />

      {/* Header */}
      <section className="relative pt-36 pb-16 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/site/service-areas.jpg" alt="" fetchpriority="high" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green-deep/90 via-brand-green-deep/80 to-brand-green-deep/95" />
        </div>
        <div className="container-tight relative z-10">
          <nav className="flex flex-wrap items-center gap-1.5 text-sm text-white/70 mb-5" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-green-lime">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/service-areas" className="hover:text-brand-green-lime">Service Areas</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-green-lime font-semibold">{town.name}, MA</span>
          </nav>
          <span className="inline-flex items-center gap-1.5 text-sm text-white/80 mb-3">
            <MapPin className="w-4 h-4 text-brand-green-lime" /> {town.county}, Massachusetts · {town.group}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl mb-5">
            Landscaping &amp; Hardscape in {town.name}, MA
          </h1>
          <p className="text-lg text-white/90 max-w-3xl leading-relaxed mb-8">
            {isHome
              ? `Bridgewater is home base for Oliveira Landscaping. We handle patios, walls, plantings, lawn care and tree work for homeowners all over town.`
              : `Oliveira Landscaping serves ${town.name} from our base in Bridgewater, about ${town.miles} miles away. Our crews handle patios, walls, plantings, lawn care and tree work for ${town.name} homeowners.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact"><Button className="btn-custom-green text-base w-full sm:w-auto">Get a Free Estimate in {town.name}</Button></Link>
            <a href={BUSINESS.phoneHref}><Button className="btn-outline-light text-base w-full sm:w-auto"><Phone className="w-4 h-4" /> {BUSINESS.phoneDisplay}</Button></a>
          </div>
        </div>
      </section>

      {/* Why local */}
      <section className="py-14 bg-white">
        <div className="container-tight grid md:grid-cols-3 gap-6">
          {[
            [Truck, isHome ? 'Right in town' : `About ${town.miles} miles away`, isHome ? 'We are based in Bridgewater, so we are never far from your property.' : `${town.name} is part of our regular ${group ? group.group : 'South Shore'} service area, a short drive from our Bridgewater base.`],
            [ShieldCheck, 'Licensed & insured', `Family-owned and operated, with ${BUSINESS.yearsExperience}+ years of landscaping and hardscape work on the South Shore.`],
            [ClipboardList, 'Free detailed estimates', `We come to your ${town.name} property, walk it with you and give you a detailed estimate.`],
          ].map(([Icon, title, text]) => (
            <div key={title} className="bg-brand-cream rounded-3xl p-7 border border-brand-sand">
              <div className="w-12 h-12 bg-brand-green-dark rounded-2xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-brand-green-lime" />
              </div>
              <h2 className="font-heading text-lg font-bold text-brand-green-dark mb-2">{title}</h2>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-brand-cream">
        <div className="container-tight">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-green-dark mb-3">Our services in {town.name}</h2>
          {group && <p className="text-gray-600 mb-8 max-w-3xl">{group.blurb}</p>}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICE_PAGES.map((s) => (
              <Link key={s.slug} to={servicePath(s)} className="group bg-white rounded-2xl p-5 border border-brand-sand hover:shadow-md transition-shadow flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-green mb-1">{s.group}</span>
                <span className="font-heading font-bold text-brand-green-dark leading-snug mb-3">{s.name}</span>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-green group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-green-dark mb-8">
            {localProjects.length ? `Our projects in ${town.name}` : 'Recent South Shore projects'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {showcase.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </div>
      </section>

      {/* Nearby towns */}
      <section className="py-14 bg-brand-cream">
        <div className="container-tight">
          <h2 className="font-heading text-2xl font-bold text-brand-green-dark mb-5">Also serving towns near {town.name}</h2>
          <div className="flex flex-wrap gap-3">
            {neighbors.map((n) => (
              <Link key={n.slug} to={townPath(n)} className="inline-flex items-center gap-1.5 bg-white text-brand-green-dark font-semibold px-4 py-2 rounded-full border border-brand-sand hover:bg-brand-sand">
                <MapPin className="w-4 h-4 text-brand-green" /> {n.name}, MA
              </Link>
            ))}
            <Link to="/service-areas" className="inline-flex items-center gap-1 text-brand-green font-semibold px-4 py-2">
              All service areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CallToAction
        title={`Landscaping in ${town.name}, Done Right`}
        subtitle={`Call ${BUSINESS.phoneDisplay} or request a free estimate online.`}
      />
    </>
  );
};

export default TownPage;
