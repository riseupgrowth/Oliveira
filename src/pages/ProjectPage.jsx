import React, { useState, useMemo, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, ChevronLeft, MapPin, Tag, ArrowRight, Expand } from 'lucide-react';
import SEO from '@/components/SEO';
import CallToAction from '@/components/CallToAction';
import Lightbox from '@/components/Lightbox';
import { Button } from '@/components/ui/button';
import { StageSummary } from '@/components/gallery/ProjectCard';
import NotFoundPage from '@/pages/NotFoundPage';
import { PROJECTS } from '@/data/gallery';
import { STAGES, STAGE_ORDER, imagesByStage, stageCounts, beforeAfterPair, projectPath, projectSeo } from '@/lib/gallery';

const ProjectPage = () => {
  const { slug } = useParams();
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[index];

  const [tab, setTab] = useState('all');
  const [open, setOpen] = useState(null); // index into `visible`

  const ordered = useMemo(() => (project ? imagesByStage(project) : []), [project]);
  const visible = useMemo(() => (tab === 'all' ? ordered : ordered.filter((im) => im.stage === tab)), [ordered, tab]);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => setOpen((i) => (i - 1 + visible.length) % visible.length), [visible.length]);
  const next = useCallback(() => setOpen((i) => (i + 1) % visible.length), [visible.length]);

  if (!project) return <NotFoundPage />;

  const counts = stageCounts(project);
  const pair = beforeAfterPair(project);
  const seo = projectSeo(project);
  const prevProject = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];
  const openImage = (img) => setOpen(visible.indexOf(img));
  const tabs = [['all', 'All photos', ordered.length], ...STAGE_ORDER.filter((s) => counts[s]).map((s) => [s, STAGES[s].label, counts[s]])];
  const groups = tab === 'all' ? STAGE_ORDER.filter((s) => counts[s]) : [tab];

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={projectPath(project)} image={seo.image} />

      {/* Header */}
      <section className="bg-brand-green-deep text-white pt-32 md:pt-36 pb-12">
        <div className="container-tight">
          <nav className="flex flex-wrap items-center gap-1.5 text-sm text-white/70 mb-5" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-green-lime">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/gallery" className="hover:text-brand-green-lime">Gallery</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-green-lime font-semibold">{project.title}</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
            <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full font-semibold">
              <Tag className="w-3.5 h-3.5" /> {project.category}
            </span>
            <span className="inline-flex items-center gap-1 text-white/80">
              <MapPin className="w-4 h-4 text-brand-green-lime" /> {project.location}
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl mb-4">{project.title}</h1>
          <p className="text-lg text-white/85 max-w-3xl leading-relaxed">{project.summary}</p>
        </div>
      </section>

      {/* Before / After */}
      {pair && (
        <section className="bg-brand-cream py-12">
          <div className="container-tight">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-green-dark mb-6">Before &amp; After</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[['before', pair.before], ['after', pair.after]].map(([stage, img]) => (
                <button
                  key={stage}
                  onClick={() => { setTab('all'); setOpen(ordered.indexOf(img)); }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-brand-sand focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-green/30"
                >
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className={`absolute top-4 left-4 ${STAGES[stage].badge} text-white text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow`}>
                    {STAGES[stage].label}
                  </span>
                  <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-10 text-left text-white text-sm">
                    {img.caption}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Photos by stage */}
      <section className="bg-white py-12">
        <div className="container-tight">
          {tabs.length > 2 && (
          <div className="sticky top-20 z-20 -mx-4 px-4 py-3 bg-white/95 backdrop-blur border-b border-brand-sand mb-8">
            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter photos by stage">
              {tabs.map(([key, label, n]) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={tab === key}
                  onClick={() => setTab(key)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    tab === key ? 'bg-brand-green-dark text-white' : 'bg-brand-cream text-brand-green-dark hover:bg-brand-sand'
                  }`}
                >
                  {key !== 'all' && <span className={`w-2 h-2 rounded-full ${STAGES[key].dot}`} />}
                  {label} <span className="opacity-60 font-normal">{n}</span>
                </button>
              ))}
            </div>
          </div>
          )}

          <div className="space-y-12">
            {groups.map((stage) => (
              <div key={stage}>
                <h2 className={`flex items-center gap-2.5 font-heading text-xl md:text-2xl font-bold mb-5 ${STAGES[stage].text}`}>
                  <span className={`w-3 h-3 rounded-full ${STAGES[stage].dot}`} />
                  {STAGES[stage].label}
                  <span className="text-gray-400 text-base font-normal">({counts[stage]})</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  {visible.filter((im) => im.stage === stage).map((img) => (
                    <figure key={img.src}>
                      <button
                        onClick={() => openImage(img)}
                        className="group relative block w-full aspect-square rounded-xl overflow-hidden bg-brand-sand shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-green/30"
                        aria-label={`Enlarge: ${img.caption}`}
                      >
                        <img
                          src={img.thumb}
                          alt={img.caption}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                          <Expand className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                      </button>
                      <figcaption className="mt-2 text-xs md:text-sm text-gray-600 leading-snug line-clamp-2">{img.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-brand-sand pt-8">
            <StageSummary project={project} className="text-sm" />
            <Link to="/contact">
              <Button className="btn-custom-green">Get a Free Estimate <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Prev / next project */}
      <nav className="bg-brand-cream py-10" aria-label="More projects">
        <div className="container-tight grid sm:grid-cols-2 gap-4">
          {[[prevProject, 'Previous project', ChevronLeft], [nextProject, 'Next project', ChevronRight]].map(([p, label, Icon], i) => (
            <Link
              key={label}
              to={projectPath(p)}
              className={`group min-w-0 flex items-center gap-4 bg-white rounded-2xl p-3 shadow-sm hover:shadow-md border border-brand-sand transition-shadow ${i ? 'sm:flex-row-reverse sm:text-right' : ''}`}
            >
              <img src={p.cover} alt="" loading="lazy" className="w-20 h-20 rounded-xl object-cover shrink-0" />
              <div className="min-w-0">
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-brand-green">
                  {!i && <Icon className="w-4 h-4" />} {label} {i ? <Icon className="w-4 h-4" /> : null}
                </span>
                <p className="font-heading font-bold text-brand-green-dark leading-snug truncate">{p.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/gallery" className="text-brand-green-dark font-semibold hover:underline">View all {PROJECTS.length} projects</Link>
        </div>
      </nav>

      <CallToAction
        title="Want Results Like These?"
        subtitle="Tell us about your property and we'll put together a free, detailed estimate."
      />

      <Lightbox images={visible} index={open} onClose={close} onPrev={prev} onNext={next} onSelect={setOpen} />
    </>
  );
};

export default ProjectPage;
