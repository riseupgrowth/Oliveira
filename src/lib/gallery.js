// Shared gallery helpers. Plain JS with no path aliases so the build-time
// prerender script (tools/prerender-routes.js) can import it directly.

export const STAGE_ORDER = ['before', 'process', 'after'];

export const STAGES = {
  before: { label: 'Before', badge: 'bg-amber-500', text: 'text-amber-600', dot: 'bg-amber-500' },
  process: { label: 'In Progress', badge: 'bg-sky-600', text: 'text-sky-700', dot: 'bg-sky-600' },
  after: { label: 'Finished', badge: 'bg-brand-green', text: 'text-brand-green', dot: 'bg-brand-green' },
};

/** Images sorted Before → In Progress → Finished (original order kept within a stage). */
export const imagesByStage = (project) =>
  STAGE_ORDER.flatMap((stage) => project.images.filter((im) => im.stage === stage));

export const stageCounts = (project) =>
  STAGE_ORDER.reduce((acc, stage) => {
    acc[stage] = project.images.filter((im) => im.stage === stage).length;
    return acc;
  }, {});

/**
 * A representative before/after pair for the project header, or null when the
 * project has no "before" shot. The "after" is the cover image when it is a
 * finished shot, otherwise the last finished image.
 */
export function beforeAfterPair(project) {
  const before = project.images.find((im) => im.stage === 'before');
  const afters = project.images.filter((im) => im.stage === 'after');
  if (!before || !afters.length) return null;
  const after = afters.find((im) => im.thumb === project.cover) || afters[afters.length - 1];
  return { before, after };
}

export const projectPath = (project) => `/gallery/${project.slug}`;

/** Title/description/image for a project page (used by the page and the prerenderer). */
export function projectSeo(project) {
  const where = project.location && project.location !== 'South Shore, MA' ? project.location : 'South Shore MA';
  const title = `${project.title} | ${where} | Oliveira Landscaping`;
  let description = project.summary;
  if (description.length > 158) description = `${description.slice(0, 155).replace(/[\s,;:—-]+\S*$/, '')}…`;
  const coverLarge = project.cover.replace('-thumb.jpg', '.jpg');
  return { title, description, image: coverLarge };
}
