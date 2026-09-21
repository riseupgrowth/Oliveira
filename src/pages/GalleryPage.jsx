import React, { useState, useMemo } from 'react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CallToAction from '@/components/CallToAction';
import ProjectCard from '@/components/gallery/ProjectCard';
import { PROJECTS, CATEGORIES } from '@/data/gallery';
import { STAGES, STAGE_ORDER } from '@/lib/gallery';

const GalleryPage = () => {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );
  const countFor = (cat) => (cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length);

  return (
    <>
      <SEO
        title="Project Gallery | Oliveira Landscaping — South Shore MA"
        description="Browse real South Shore landscaping, hardscape, patio, and stonework projects by Oliveira Landscaping — from start to finish. See the craftsmanship before you call."
        path="/gallery"
        keywords="landscaping gallery South Shore, hardscape project photos MA, paver patio examples, retaining wall photos, before and after landscaping Massachusetts"
        image="/images/site/service-areas.jpg"
      />

      <PageHero
        title="Our Project Gallery"
        subtitle="Real South Shore transformations — pick a project to see it from first cut to final detail."
        image="/images/site/service-areas.jpg"
        crumb="Gallery"
      />

      <section className="py-14 bg-brand-cream">
        <div className="container-tight">
          {/* Filters + legend */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
            <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filter projects by category">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={filter === cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-colors ${
                    filter === cat
                      ? 'bg-brand-green-dark text-white shadow-md'
                      : 'bg-white text-brand-green-dark border border-brand-sand hover:bg-brand-sand'
                  }`}
                >
                  {cat} <span className="opacity-60 font-normal">({countFor(cat)})</span>
                </button>
              ))}
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-600" aria-label="Photo stages">
              {STAGE_ORDER.map((s) => (
                <li key={s} className="inline-flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${STAGES[s].dot}`} /> {STAGES[s].label}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Picture Your Property Here"
        subtitle="Every project starts with a free estimate. Let's design and build your transformation next."
      />
    </>
  );
};

export default GalleryPage;
