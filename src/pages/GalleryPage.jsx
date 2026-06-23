import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Tag } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CallToAction from '@/components/CallToAction';
import Lightbox from '@/components/Lightbox';
import { PROJECTS, CATEGORIES, STAGE_LABELS } from '@/data/gallery';

const stageColor = {
  before: 'bg-amber-500/90',
  process: 'bg-blue-500/90',
  after: 'bg-brand-green/90',
};

const GalleryPage = () => {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState({ images: null, index: null });

  const visible = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  const openLightbox = (images, index) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox({ images: null, index: null });
  const prev = () => setLightbox((s) => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length }));
  const next = () => setLightbox((s) => ({ ...s, index: (s.index + 1) % s.images.length }));

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
        subtitle="Real South Shore transformations — organized by project and shown from first cut to final detail."
        image="/images/site/service-areas.jpg"
        crumb="Gallery"
      />

      {/* Filter */}
      <section className="pt-14 pb-2 bg-white sticky top-20 z-30">
        <div className="container-tight flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                filter === cat
                  ? 'bg-brand-green-dark text-white shadow-md'
                  : 'bg-brand-cream text-brand-green-dark hover:bg-brand-sand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white">
        <div className="container-tight space-y-24">
          {visible.map((project) => {
            const hasProcess = project.images.some((im) => im.stage !== 'after');
            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-7">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center gap-1.5 bg-brand-green-dark text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        <Tag className="w-3 h-3" /> {project.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-gray-500 text-sm">
                        <MapPin className="w-4 h-4 text-brand-green" /> {project.location}
                      </span>
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-green-dark">{project.title}</h2>
                  </div>
                  {hasProcess && (
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 whitespace-nowrap">
                      <span className="text-amber-600">Before</span>
                      <ArrowRight className="w-4 h-4" />
                      <span className="text-blue-600">In&nbsp;Progress</span>
                      <ArrowRight className="w-4 h-4" />
                      <span className="text-brand-green">Finished</span>
                    </div>
                  )}
                </div>
                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mb-8">{project.summary}</p>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
                  {project.images.map((img, i) => (
                    <button
                      key={img.src}
                      onClick={() => openLightbox(project.images, i)}
                      className="group relative mb-5 block w-full overflow-hidden rounded-2xl shadow-md break-inside-avoid focus:outline-none focus:ring-4 focus:ring-brand-green/30"
                    >
                      <img
                        src={img.thumb}
                        alt={img.caption}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className={`absolute top-3 left-3 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${stageColor[img.stage] || 'bg-brand-green/90'}`}>
                        {STAGE_LABELS[img.stage]}
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white text-sm leading-snug">{img.caption}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <CallToAction
        title="Picture Your Property Here"
        subtitle="Every project starts with a free estimate. Let's design and build your transformation next."
      />

      <Lightbox
        images={lightbox.images || []}
        index={lightbox.images ? lightbox.index : null}
        onClose={closeLightbox}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
};

export default GalleryPage;
