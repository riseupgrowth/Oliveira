import React, { useState } from 'react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CallToAction from '@/components/CallToAction';
import PostCard from '@/components/blog/PostCard';
import { BLOG_POSTS } from '@/data/blog';
import { blogIndexSchema } from '@/lib/seo-pages';

const CATEGORIES = ['All', ...new Set(BLOG_POSTS.map((p) => p.category))];

const BlogPage = () => {
  const [category, setCategory] = useState('All');
  const posts = category === 'All' ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === category);

  return (
    <>
      <SEO
        title="Landscaping & Hardscape Blog | South Shore MA | Oliveira"
        description="Practical guides on patios, retaining walls, drainage, mulch, lawn care and seasonal yard work for Massachusetts homeowners, from a South Shore crew."
        path="/blog"
        image="/images/site/why-choose.jpg"
        schema={blogIndexSchema()}
      />

      <PageHero
        title="Landscaping Guides & Tips"
        subtitle="Straight answers on patios, walls, drainage, planting and seasonal care for South Shore homeowners — from the crew that does the work."
        image="/images/site/why-choose.jpg"
        crumb="Blog"
      />

      <section className="py-16 bg-brand-cream">
        <div className="container-tight">
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter posts by category">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  category === c
                    ? 'bg-brand-green-dark text-white border-brand-green-dark'
                    : 'bg-white text-brand-green-dark border-brand-sand hover:bg-brand-sand'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>

      <CallToAction
        title="Have a Project in Mind?"
        subtitle="Skip the research — tell us about your property and we'll put together a free, detailed estimate."
      />
    </>
  );
};

export default BlogPage;
