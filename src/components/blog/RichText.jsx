import React from 'react';
import { Link } from 'react-router-dom';

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

/** Renders blog inline markup: **bold** and [label](href). Internal links use the router. */
const RichText = ({ text }) => (
  <>
    {text.split(TOKEN).filter(Boolean).map((part, i) => {
      if (part.startsWith('**')) return <strong key={i} className="text-gray-900">{part.slice(2, -2)}</strong>;
      const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (!link) return <React.Fragment key={i}>{part}</React.Fragment>;
      const [, label, href] = link;
      const cls = 'text-brand-green font-semibold underline decoration-brand-green/40 underline-offset-2 hover:text-brand-green-dark';
      return href.startsWith('/')
        ? <Link key={i} to={href} className={cls}>{label}</Link>
        : <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>;
    })}
  </>
);

export default RichText;
