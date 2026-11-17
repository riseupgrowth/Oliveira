import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Clock, CalendarDays, CheckCircle2, Lightbulb, ArrowRight, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import CallToAction from '@/components/CallToAction';
import ProjectCard from '@/components/gallery/ProjectCard';
import RichText from '@/components/blog/RichText';
import PostCard, { formatDate } from '@/components/blog/PostCard';
import { Button } from '@/components/ui/button';
import NotFoundPage from '@/pages/NotFoundPage';
import { BLOG_POSTS, BLOG_AUTHOR, POST_BY_SLUG, readMinutes } from '@/data/blog';
import { SERVICE_BY_SLUG } from '@/data/services';
import { PROJECTS } from '@/data/gallery';
import { BUSINESS } from '@/data/site';
import { blogSeo, blogPostSchema, blogPath, servicePath } from '@/lib/seo-pages';

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const Block = ({ block }) => {
  switch (block.type) {
    case 'h2':
      return <h2 id={slugify(block.text)} className="font-heading text-2xl md:text-3xl font-bold text-brand-green-dark mt-12 mb-4 scroll-mt-28">{block.text}</h2>;
    case 'h3':
      return <h3 className="font-heading text-xl font-bold text-brand-green-dark mt-8 mb-3">{block.text}</h3>;
    case 'p':
      return <p className="mb-5"><RichText text={block.text} /></p>;
    case 'ul':
    case 'ol': {
      const Tag = block.type;
      return (
        <Tag className={`${block.type === 'ol' ? 'list-decimal' : 'list-disc'} pl-6 mb-6 space-y-2 marker:text-brand-green`}>
          {block.items.map((item) => <li key={item} className="pl-1"><RichText text={item} /></li>)}
        </Tag>
      );
    }
    case 'table':
      return (
        <div className="my-8 overflow-x-auto rounded-2xl border border-brand-sand">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-brand-green-dark text-white">
              <tr>{block.head.map((h) => <th key={h} scope="col" className="px-4 py-3 font-heading font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]} className="odd:bg-white even:bg-brand-cream">
                  {row.map((cell, i) => (
                    i === 0
                      ? <th key={i} scope="row" className="px-4 py-3 font-semibold text-gray-900 align-top">{cell}</th>
                      : <td key={i} className="px-4 py-3 align-top">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'tip':
      return (
        <aside className="my-8 flex gap-4 bg-brand-cream border-l-4 border-brand-green rounded-r-2xl p-5">
          <Lightbulb className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
          <p className="text-gray-800"><RichText text={block.text} /></p>
        </aside>
      );
    default:
      return null;
  }
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = POST_BY_SLUG[slug];
  if (!post) return <NotFoundPage />;

  const seo = blogSeo(post);
  const toc = post.body.filter((b) => b.type === 'h2');
  const services = post.services.map((s) => SERVICE_BY_SLUG[s]).filter(Boolean);
  const projects = post.projects.map((s) => PROJECTS.find((p) => p.slug === s)).filter(Boolean);
  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        path={blogPath(post)}
        image={post.cover}
        type="article"
        published={seo.published}
        modified={seo.modified}
        schema={blogPostSchema(post)}
      />

      {/* Header */}
      <section className="relative pt-36 pb-16 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.cover} alt="" fetchpriority="high" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green-deep/90 via-brand-green-deep/85 to-brand-green-deep/95" />
        </div>
        <div className="container-tight relative z-10 max-w-4xl">
          <nav className="flex flex-wrap items-center gap-1.5 text-sm text-white/70 mb-5" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-green-lime">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-brand-green-lime">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-green-lime font-semibold">{post.category}</span>
          </nav>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold leading-tight mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
            <span>By <strong className="text-white">{BLOG_AUTHOR.name}</strong></span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4" />
              <time dateTime={post.updated || post.date}>Updated {formatDate(post.updated || post.date)}</time>
            </span>
            <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" /> {readMinutes(post)} min read</span>
          </div>
        </div>
      </section>

      <article className="py-14 bg-white">
        <div className="container-tight grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 text-lg text-gray-700 leading-relaxed">
            {/* Answer-first summary: what people (and AI answer engines) want first. */}
            <section className="quick-answer bg-brand-cream border border-brand-sand rounded-3xl p-6 md:p-8 mb-10" aria-labelledby="quick-answer">
              <h2 id="quick-answer" className="font-heading text-sm font-bold uppercase tracking-widest text-brand-green mb-3">Quick answer</h2>
              <p className="text-gray-900 text-lg leading-relaxed mb-6">{post.quickAnswer}</p>
              <h3 className="font-heading font-bold text-brand-green-dark mb-3">Key takeaways</h3>
              <ul className="space-y-2">
                {post.takeaways.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-base">
                    <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> {t}
                  </li>
                ))}
              </ul>
            </section>

            {post.body.map((block, i) => <Block key={i} block={block} />)}

            {/* FAQ */}
            <section className="mt-14" aria-labelledby="faq">
              <h2 id="faq" className="font-heading text-2xl md:text-3xl font-bold text-brand-green-dark mb-6">Frequently asked questions</h2>
              <div className="space-y-3">
                {post.faq.map(([q, a]) => (
                  <details key={q} className="group bg-brand-cream border border-brand-sand rounded-2xl p-5 open:shadow-sm">
                    <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-heading font-bold text-brand-green-dark">
                      <h3 className="text-base md:text-lg">{q}</h3>
                      <ChevronRight className="w-5 h-5 shrink-0 mt-1 text-brand-green transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 text-base text-gray-700">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Author box (E-E-A-T) */}
            <section className="mt-12 flex flex-col sm:flex-row gap-5 items-start border-t border-brand-sand pt-8">
              <img src={BUSINESS.logo} alt="Oliveira Landscaping logo" width="480" height="204" loading="lazy" className="h-14 w-auto" />
              <div>
                <p className="font-heading font-bold text-brand-green-dark">{BLOG_AUTHOR.name}</p>
                <p className="text-base text-gray-600">{BLOG_AUTHOR.bio}</p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 self-start">
            {toc.length > 2 && (
              <nav className="bg-brand-cream rounded-3xl p-6 border border-brand-sand" aria-label="In this article">
                <p className="font-heading font-bold text-brand-green-dark mb-3">In this article</p>
                <ol className="space-y-2 text-sm">
                  {toc.map((h) => (
                    <li key={h.text}><a href={`#${slugify(h.text)}`} className="text-gray-700 hover:text-brand-green">{h.text}</a></li>
                  ))}
                  <li><a href="#faq" className="text-gray-700 hover:text-brand-green">FAQ</a></li>
                </ol>
              </nav>
            )}
            <div className="bg-brand-green-dark text-white rounded-3xl p-6">
              <p className="font-heading text-xl font-bold mb-2">Get a free estimate</p>
              <p className="text-white/80 text-sm mb-5">Family-owned, licensed &amp; insured. Serving 30+ South Shore towns from Bridgewater.</p>
              <Link to="/contact"><Button className="btn-lime w-full text-base">Request an Estimate</Button></Link>
              <a href={BUSINESS.phoneHref} className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-brand-green-lime">
                <Phone className="w-4 h-4" /> {BUSINESS.phoneDisplay}
              </a>
            </div>
            {services.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-brand-sand">
                <p className="font-heading font-bold text-brand-green-dark mb-3">Related services</p>
                <ul className="space-y-2">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link to={servicePath(s)} className="group flex items-center justify-between text-gray-700 hover:text-brand-green">
                        {s.name} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </article>

      {projects.length > 0 && (
        <section className="py-16 bg-brand-cream">
          <div className="container-tight">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-green-dark mb-8">See it on real South Shore projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="container-tight">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-green-dark">More guides</h2>
            <Link to="/blog" className="text-brand-green font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              All articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {more.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Get Started?"
        subtitle="Tell us about your property and we'll put together a free, detailed estimate."
      />
    </>
  );
};

export default BlogPostPage;
