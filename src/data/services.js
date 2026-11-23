// Detailed service pages (/services/<slug>). Plain JS, no imports, so the
// build-time prerenderer can read it too. `projects` are gallery slugs that
// show real work for the service.

export const SERVICE_PAGES = [
  {
    slug: 'paver-patios-walkways',
    name: 'Paver Patios & Walkways',
    group: 'Hardscape & Masonry',
    headline: 'Paver Patios, Walkways & Driveways on the South Shore',
    metaTitle: 'Paver Patios, Walkways & Driveways | South Shore MA | Oliveira',
    metaDescription:
      'Brick and paver patios, walkways and driveways on a compacted base. Brick & paver only, no asphalt. Serving the South Shore, MA. Free estimates.',
    // Shown at the top of the page so visitors know before requesting an estimate.
    notice: {
      title: 'Driveways: Brick & Paver only — no asphalt',
      text: 'We build driveways, aprons and borders in brick and interlocking pavers. We do not install, pave, repair or seal asphalt driveways — for an asphalt driveway, please contact a paving company.',
    },
    intro: [
      'A paver walkway or patio is one of the most visible upgrades you can make to a property. It sets the first impression at the front door and turns an unused corner of the yard into a place you actually want to spend time.',
      'We lay out every job around how you move through your property, excavate to firm ground, build a compacted gravel base and set interlocking pavers with clean borders — straight runs, sweeping curves, steps, landings and driveway aprons.',
    ],
    includes: [
      'Front walkways and entry landings',
      'Backyard paver patios',
      'Curved paths and garden walks',
      'Paver and granite steps',
      'Brick & paver driveways, aprons and borders (no asphalt)',
      'Soldier-course and contrasting borders',
      'Granite curbing and edging',
      'Tie-ins with stone walls and planting beds',
    ],
    process: [
      ['Layout', 'We walk the property with you and mark the shape, width and grade of the new walkway or patio.'],
      ['Excavation & base', 'Old material and soil come out, then a gravel base is spread and compacted in layers.'],
      ['Setting the pavers', 'Pavers are laid in the chosen pattern, cut to fit curves and edges, and finished with a border.'],
      ['Finishing', 'Joints are filled, the surface is compacted and the surrounding beds and lawn are cleaned up.'],
    ],
    projects: ['paver-apron-stone-walls', 'curved-paver-walkway', 'paver-walkway', 'hingham-yard-renovation', 'paver-path-gravel-parking', 'under-deck-paver-patio'],
    related: ['retaining-walls-stone-walls', 'concrete-patios', 'grading-drainage'],
  },
  {
    slug: 'retaining-walls-stone-walls',
    name: 'Retaining Walls & Stone Walls',
    group: 'Hardscape & Masonry',
    headline: 'Retaining Walls & Stone Walls on the South Shore',
    metaTitle: 'Retaining Walls & Stone Walls | South Shore MA | Oliveira Landscaping',
    metaDescription:
      'Block retaining walls, natural fieldstone walls, boulder walls and stone wall restoration across the South Shore, MA. Licensed & insured. Free estimates.',
    intro: [
      'New England properties are full of slopes, ledge and old stone walls. A well-built retaining wall holds back soil, creates usable flat space and adds structure to the whole landscape.',
      'We build block retaining walls, natural fieldstone and boulder walls, and restore existing granite walls — setting each course on a prepared base so the wall stays straight and solid through our freeze-and-thaw winters.',
    ],
    includes: [
      'Segmental block retaining walls',
      'Natural fieldstone walls',
      'Boulder walls and slope edges',
      'Stone wall repair and restoration',
      'Granite steps set into walls',
      'Raised tree rings and planters',
      'Regrading behind and around walls',
      'Wall caps, clean-up and power washing',
    ],
    process: [
      ['Assessment', 'We look at the slope, soil and drainage to decide the right wall type and height.'],
      ['Excavation & base', 'We dig the footing and prepare a compacted base for the first course.'],
      ['Building the wall', 'Block, fieldstone or boulders are set course by course and backfilled as the wall rises.'],
      ['Grading & clean-up', 'The ground behind and in front of the wall is graded, and the site is cleaned and washed.'],
    ],
    projects: ['paver-apron-stone-walls', 'stone-wall-restoration', 'wooded-lot-regrade', 'paver-walkway'],
    related: ['paver-patios-walkways', 'grading-drainage', 'landscape-installation'],
  },
  {
    slug: 'concrete-patios',
    name: 'Concrete Patios',
    group: 'Patios & Outdoor Living',
    headline: 'Poured Concrete Patios on the South Shore',
    metaTitle: 'Concrete Patios | South Shore MA | Oliveira Landscaping',
    metaDescription:
      'Poured concrete patios and walkways for South Shore, MA homes — excavation, forms, pour, finish and lawn restoration by Oliveira Landscaping. Free estimates.',
    intro: [
      'A poured concrete patio is a clean, durable surface for outdoor dining and lounging that is simple to maintain.',
      'We handle the full job: excavating the footprint, setting forms, pouring and finishing the slab with control joints, then restoring the loam and lawn around it so the patio looks like it has always been there.',
    ],
    includes: [
      'Backyard concrete patios',
      'Concrete walkways along the house',
      'Excavation and site preparation',
      'Forms, pour and finishing',
      'Control joints to limit cracking',
      'Loam and lawn restoration around the slab',
    ],
    process: [
      ['Layout', 'We size the patio for how you plan to use it and mark the footprint.'],
      ['Excavation & forms', 'The area is excavated, prepared and framed with forms.'],
      ['Pour & finish', 'Concrete is poured, screeded and finished, with control joints tooled in.'],
      ['Restoration', 'Once the slab cures, we restore the loam and lawn around it.'],
    ],
    projects: ['concrete-patio'],
    related: ['paver-patios-walkways', 'grading-drainage', 'lawn-care-cleanups'],
  },
  {
    slug: 'landscape-installation',
    name: 'Landscape Design & Plantings',
    group: 'Landscaping & Lawn Care',
    headline: 'Landscape Installation & Plantings on the South Shore',
    metaTitle: 'Landscape Design & Plantings | South Shore MA | Oliveira Landscaping',
    metaDescription:
      'Foundation plantings, new garden beds, evergreen privacy screens and tree planting for South Shore, MA homes. Oliveira Landscaping — free estimates.',
    intro: [
      'Good plantings frame a house, hide what you do not want to see and give the property color through the seasons.',
      'We shape new beds, prepare the soil and install shrubs, grasses, evergreens and trees — from foundation plantings around the front of the house to full privacy screens along a fence line — and finish everything with fresh mulch and clean edges.',
    ],
    includes: [
      'Foundation plantings',
      'New and redesigned garden beds',
      'Evergreen and arborvitae privacy screens',
      'Shade and ornamental tree planting',
      'Boulder and fieldstone accents',
      'Seasonal flowers and color',
      'Bed preparation, mulch and edging',
    ],
    process: [
      ['Plan', 'We choose plants and bed shapes that fit your house, sun and maintenance level.'],
      ['Prepare', 'Beds are cut in, cleared and prepared for planting.'],
      ['Plant', 'Shrubs, evergreens and trees are set — larger trees with our equipment for a straight, level set.'],
      ['Finish', 'Beds are mulched and edged so the new landscape looks finished on day one.'],
    ],
    projects: ['foundation-planting-brick-walk', 'evergreen-privacy-screen', 'wooded-lot-regrade', 'mulch-driveway-estate'],
    related: ['mulching-bed-edging', 'lawn-care-cleanups', 'retaining-walls-stone-walls'],
  },
  {
    slug: 'mulching-bed-edging',
    name: 'Mulching & Bed Edging',
    group: 'Landscaping & Lawn Care',
    headline: 'Mulching, Bed Edging & Granite Borders on the South Shore',
    metaTitle: 'Mulching & Bed Edging | South Shore MA | Oliveira Landscaping',
    metaDescription:
      'Fresh mulch, crisp bed edges, steel edging and granite cobblestone borders for South Shore, MA properties. Fast curb appeal from Oliveira Landscaping.',
    intro: [
      'Fresh mulch and sharp bed lines are the quickest way to make a property look cared for. They also hold moisture in the soil and keep weeds down.',
      'We clean out the beds, re-cut the edges, and spread fresh mulch around shrubs, trees and walkways. For edges that stay put, we install flexible steel edging or hand-set granite cobblestone borders.',
    ],
    includes: [
      'Red and black mulch installation',
      'Bed clean-out and weeding',
      'Re-cutting bed lines and tree rings',
      'Steel landscape edging',
      'Granite cobblestone bed borders',
      'Seasonal bed refreshes',
    ],
    process: [
      ['Clean-out', 'Leaves, weeds and debris are cleared from the beds.'],
      ['Edging', 'Bed lines are re-cut, or new steel or granite edging is installed.'],
      ['Mulch', 'Fresh mulch is spread to an even depth around plants and trees.'],
      ['Clean-up', 'Walkways and lawn edges are blown clean before we leave.'],
    ],
    projects: ['mulch-driveway-estate', 'granite-bed-edging', 'red-mulch-refresh', 'edging-bed-refresh', 'spring-cleanup-mulch'],
    related: ['lawn-care-cleanups', 'landscape-installation', 'paver-patios-walkways'],
  },
  {
    slug: 'lawn-care-cleanups',
    name: 'Lawn Care & Seasonal Clean-ups',
    group: 'Landscaping & Lawn Care',
    headline: 'Lawn Care & Seasonal Clean-ups on the South Shore',
    metaTitle: 'Lawn Care & Clean-ups | South Shore MA | Oliveira Landscaping',
    metaDescription:
      'Lawn mowing programs, spring and fall clean-ups, seeding, shrub trimming and property clean-ups across the South Shore, MA. Oliveira Landscaping.',
    intro: [
      'A healthy lawn and a tidy property take steady care through the season. We keep South Shore properties mowed, trimmed and cleaned up so you do not have to think about it.',
      'Beyond weekly care, we handle the bigger jobs: spring and fall clean-ups, overgrown lots, loam and seed for new lawns, and pruning around the house.',
    ],
    includes: [
      'Lawn mowing and trimming programs',
      'Spring and fall clean-ups',
      'Leaf and debris removal',
      'Loam, seed and new lawn installation',
      'Shrub trimming and pruning',
      'Overgrown property clean-ups',
      'Power washing',
    ],
    process: [
      ['Walk-through', 'We look at the property and agree on what needs to be done and how often.'],
      ['Clean-up', 'Debris, leaves and overgrowth are cleared first.'],
      ['Care', 'Mowing, trimming and pruning are done on a regular schedule.'],
      ['Seasonal work', 'Seeding, bed refreshes and clean-ups happen when the season calls for them.'],
    ],
    projects: ['lawn-care', 'spring-cleanup-mulch', 'norwell-estate-cleanup', 'hingham-yard-renovation'],
    related: ['mulching-bed-edging', 'landscape-installation', 'tree-removal-land-clearing'],
  },
  {
    slug: 'grading-drainage',
    name: 'Grading & Drainage',
    group: 'Patios & Outdoor Living',
    headline: 'Grading, Drainage & Erosion Control on the South Shore',
    metaTitle: 'Grading & Drainage | South Shore MA | Oliveira Landscaping',
    metaDescription:
      'Regrading, loam and seed, trench drains, channel drains and riprap slope stabilization for South Shore, MA properties. Oliveira Landscaping — free estimates.',
    intro: [
      'Water that pools against a foundation, washes out a slope or sits in front of the garage is a problem that only gets worse. The fix usually starts with the grade.',
      'We regrade yards with fresh loam, install trench and channel drains in hardscape, stabilize eroding banks with crushed-stone riprap and add river-stone borders where water needs somewhere to go.',
    ],
    includes: [
      'Yard regrading with loam',
      'Seeding after regrading',
      'Trench drains at garages and driveways',
      'Channel drains in patios',
      'Riprap slope stabilization',
      'River-stone drainage borders',
      'Excavation with our own equipment',
    ],
    process: [
      ['Find the problem', 'We look at where water comes from and where it collects.'],
      ['Plan the fix', 'We choose the right mix of grading, drains and stone for the site.'],
      ['Excavate & build', 'Our crew regrades, sets drains and places stone with our own equipment.'],
      ['Restore', 'Loam, seed and plantings go back in so the area looks finished.'],
    ],
    projects: ['wooded-lot-regrade', 'hingham-yard-renovation', 'granite-apron-trench-drain', 'under-deck-paver-patio', 'riprap-river-stone-borders', 'norwell-estate-cleanup'],
    related: ['retaining-walls-stone-walls', 'paver-patios-walkways', 'lawn-care-cleanups'],
  },
  {
    slug: 'tree-removal-land-clearing',
    name: 'Tree Removal & Land Clearing',
    group: 'Landscaping & Lawn Care',
    headline: 'Tree Removal & Land Clearing on the South Shore',
    metaTitle: 'Tree Removal & Land Clearing | South Shore MA | Oliveira Landscaping',
    metaDescription:
      'Tree removal with bucket truck and chipper, brush and lot clearing, stump and log clean-up for homes and commercial properties. Oliveira Landscaping.',
    intro: [
      'Whether it is a tree leaning toward the house, a lot overtaken by brush or grounds that need to be opened up, we have the crew and equipment to do it safely.',
      'We remove trees with a bucket truck and chipper, clear brush and overgrowth, haul away logs and debris, and leave the area graded and ready for lawn or landscaping.',
    ],
    includes: [
      'Tree removal near homes and roads',
      'Bucket truck and chipper work',
      'Brush and lot clearing',
      'Log and debris hauling',
      'Pruning and limb removal',
      'Grading and clean-up after removal',
      'Residential and commercial properties',
    ],
    process: [
      ['Assessment', 'We look at the trees, access and anything nearby that needs protecting.'],
      ['Removal', 'Trees are taken down in sections with the bucket truck where needed.'],
      ['Clean-up', 'Limbs are chipped and logs and debris are hauled away.'],
      ['Restore', 'The ground is graded and left ready for lawn or new plantings.'],
    ],
    projects: ['abington-tree-removal', 'commercial-tree-clearing', 'evergreen-privacy-screen'],
    related: ['lawn-care-cleanups', 'grading-drainage', 'landscape-installation'],
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICE_PAGES.map((s) => [s.slug, s]));
