import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { readMinutes } from '@/data/blog';

export const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const PostCard = ({ post }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-brand-sand transition-shadow focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-green/30"
  >
    <div className="aspect-[16/10] overflow-hidden bg-brand-sand">
      <img
        src={post.cover.replace('.jpg', '-thumb.jpg')}
        alt={post.coverAlt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="flex flex-col flex-1 p-6">
      <div className="flex items-center gap-3 text-xs font-semibold text-gray-500 mb-3">
        <span className="uppercase tracking-widest text-brand-green">{post.category}</span>
        <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {readMinutes(post)} min read</span>
      </div>
      <h3 className="font-heading text-lg font-bold text-brand-green-dark leading-snug mb-3">{post.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-5">{post.excerpt}</p>
      <span className="mt-auto inline-flex items-center gap-1 text-brand-green font-semibold text-sm group-hover:gap-2 transition-all">
        Read the guide <ArrowRight className="w-4 h-4" />
      </span>
    </div>
  </Link>
);

export default PostCard;
