import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Camera, ArrowRight } from 'lucide-react';
import { STAGES, STAGE_ORDER, stageCounts, projectPath } from '@/lib/gallery';

/** "3 Before · 5 In Progress · 8 Finished" with colored dots. */
export const StageSummary = ({ project, className = '' }) => {
  const counts = stageCounts(project);
  return (
    <ul className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-gray-600 ${className}`}>
      {STAGE_ORDER.filter((s) => counts[s]).map((s) => (
        <li key={s} className="inline-flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${STAGES[s].dot}`} />
          {counts[s]} {STAGES[s].label}
        </li>
      ))}
    </ul>
  );
};

const ProjectCard = ({ project }) => (
  <Link
    to={projectPath(project)}
    className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-brand-sand transition-shadow focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-green/30"
  >
    <div className="relative aspect-[4/3] overflow-hidden bg-brand-sand">
      <img
        src={project.cover}
        alt={`${project.title} by Oliveira Landscaping in ${project.location}`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span className="absolute top-3 left-3 bg-brand-green-dark/90 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
        {project.category}
      </span>
      <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
        <Camera className="w-3.5 h-3.5" /> {project.images.length}
      </span>
    </div>
    <div className="flex flex-col flex-1 p-5">
      <span className="inline-flex items-center gap-1 text-gray-500 text-sm mb-1.5">
        <MapPin className="w-4 h-4 text-brand-green" /> {project.location}
      </span>
      <h3 className="font-heading text-lg font-bold text-brand-green-dark leading-snug mb-2">{project.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">{project.summary}</p>
      <div className="mt-auto flex items-end justify-between gap-3">
        <StageSummary project={project} />
        <span className="shrink-0 inline-flex items-center gap-1 text-brand-green font-semibold text-sm group-hover:gap-2 transition-all">
          View <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  </Link>
);

export default ProjectCard;
