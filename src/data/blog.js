// Blog posts (/blog/<slug>). Plain JS, no imports, so the build-time
// prerenderer can read it too.
//
// Body blocks: { type: 'h2' | 'h3' | 'p' | 'tip', text } · { type: 'ul' | 'ol', items }
//              { type: 'table', head: [...], rows: [[...]] }
// Inline text supports **bold** and [label](/internal-or-https-link).
// `quickAnswer` is the answer-first summary shown at the top of each post (and
// what AI search engines tend to quote). `services` / `projects` are slugs used
// for internal links.

export const BLOG_AUTHOR = {
  name: 'Oliveira Landscaping Team',
  bio: "Family-owned landscaping and hardscape crew based in Bridgewater, MA, with 16+ years and 1,500+ projects across Boston's South Shore.",
};

export const BLOG_POSTS = [
  {
    slug: 'paver-patio-vs-concrete-patio-massachusetts',
    title: 'Paver Patio vs. Concrete Patio in Massachusetts: Which Is Right for You?',
    metaTitle: 'Paver vs. Concrete Patio in Massachusetts | Oliveira Landscaping',
    metaDescription:
      'Pavers or poured concrete? Compare cost factors, freeze-thaw durability, repairs and looks for patios on the South Shore, MA, from a local hardscape crew.',
    category: 'Hardscape',
    date: '2026-11-17',
    updated: '2026-11-17',
    cover: '/images/projects/concrete-patio/concrete-patio-02.jpg',
    coverAlt: 'Backyard concrete patio built by Oliveira Landscaping on the South Shore, MA',
    excerpt:
      'Both pavers and poured concrete make great patios in New England. The right choice depends on budget, how much you care about repairs, and the look you want.',
    quickAnswer:
      'In Massachusetts, a poured concrete patio usually costs less up front, while a paver patio handles freeze-thaw cycles better and is easier to repair, because individual pavers can be lifted and reset instead of patching a cracked slab. Either one lasts for decades if it is built on a properly compacted gravel base with good drainage.',
    takeaways: [
      'Concrete is typically the lower up-front cost; pavers usually cost more but are repairable piece by piece.',
      'Interlocking pavers flex slightly with frost heave instead of cracking like a solid slab.',
      'The gravel base and drainage matter more than the surface material in a New England winter.',
      'Pavers offer more patterns, colors and borders; concrete gives a clean, modern, continuous look.',
    ],
    body: [
      { type: 'h2', text: 'The short version' },
      {
        type: 'p',
        text: "We build both kinds of patios across the South Shore, and neither one is automatically better. A [poured concrete patio](/services/concrete-patios) is a single, solid slab: fast to install, clean-looking and usually the more budget-friendly option. A [paver patio](/services/paver-patios-walkways) is made of hundreds of individual units set on a compacted base, which makes it more flexible, more decorative and much easier to repair.",
      },
      { type: 'h2', text: 'Side-by-side comparison' },
      {
        type: 'table',
        head: ['Factor', 'Paver patio', 'Poured concrete patio'],
        rows: [
          ['Up-front cost', 'Higher (more labor and material)', 'Lower in most cases'],
          ['Freeze-thaw performance', 'Joints let it flex; resists cracking', 'Can crack if the base moves'],
          ['Repairs', 'Lift and reset individual pavers', 'Patch or replace sections'],
          ['Look', 'Many colors, patterns and borders', 'Smooth, continuous, modern'],
          ['Install time', 'Longer (cutting, borders, joints)', 'Shorter, but needs curing time'],
          ['Maintenance', 'Occasional joint sand top-up, weeding', 'Occasional sealing, crack monitoring'],
        ],
      },
      { type: 'h2', text: 'Why New England winters change the math' },
      {
        type: 'p',
        text: 'Southeastern Massachusetts goes through dozens of freeze-thaw cycles every winter. Water gets into the soil under a patio, freezes, expands and pushes up; then it thaws and settles. A solid concrete slab has no way to absorb that movement, so stress shows up as cracks. Interlocking pavers move as a system, and the joints between them give that movement somewhere to go.',
      },
      {
        type: 'p',
        text: 'Manufactured concrete pavers are also very dense. Pavers made to the ASTM C936 standard average at least **8,000 psi** in compressive strength, roughly double a typical poured residential slab. That density means they absorb less water, which is exactly what you want in a freeze-thaw climate.',
      },
      {
        type: 'tip',
        text: 'Whatever surface you choose, ask how deep the gravel base will be. A thin base is the number one reason patios settle, heave or crack on the South Shore.',
      },
      { type: 'h2', text: 'What actually makes a patio last' },
      { type: 'ol', items: [
        '**Excavation to firm subsoil** — topsoil and organic material are removed because they compress over time.',
        '**A compacted gravel base** — spread and compacted in layers. For patios and walkways in New England, 6 to 8 inches is a common standard; driveways need more.',
        '**Pitch for drainage** — the surface should slope slightly away from the house so water never sits against your foundation.',
        '**Edge restraint (pavers) or control joints (concrete)** — restraints stop pavers from creeping; control joints tell a slab where to crack neatly instead of randomly.',
      ] },
      {
        type: 'p',
        text: 'You can see both approaches on real jobs in our gallery, like this [backyard concrete patio](/gallery/concrete-patio) and this [under-deck paver patio with drainage](/gallery/under-deck-paver-patio).',
      },
      { type: 'h2', text: 'Which one should you choose?' },
      { type: 'ul', items: [
        '**Choose concrete** if you want the most budget-friendly option, a clean modern look, or a simple rectangular space for a table and grill.',
        '**Choose pavers** if you want curves, borders, steps or color, if the area sits near trees whose roots may move things, or if you care about easy future repairs.',
        '**Mix them** — a concrete patio with a paver or granite border can give you the best of both.',
      ] },
      {
        type: 'p',
        text: 'Not sure? We can look at your yard, the soil and the drainage, and price both options side by side in a [free estimate](/contact).',
      },
    ],
    faq: [
      ['Do paver patios last longer than concrete in Massachusetts?', 'Both can last decades when built on a proper base. Pavers tend to age better in freeze-thaw climates because the joints let them flex, and damaged pavers can be replaced individually instead of patching a cracked slab.'],
      ['Is a concrete patio cheaper than pavers?', 'In most cases, yes. Poured concrete usually has a lower up-front cost because it takes less labor to install. Final prices depend on size, access, excavation, base depth and finishes.'],
      ['Will a concrete patio crack?', 'Most concrete develops some hairline cracking over time. Control joints, a well-compacted base and good drainage keep cracks small and in predictable places.'],
      ['Do pavers need to be sealed?', 'Sealing is optional. It can enhance color and make cleaning easier, but a well-built paver patio performs fine without it.'],
    ],
    services: ['paver-patios-walkways', 'concrete-patios', 'grading-drainage'],
    projects: ['concrete-patio', 'under-deck-paver-patio', 'paver-path-gravel-parking'],
  },

  {
    slug: 'retaining-walls-south-shore-guide',
    title: 'Retaining Walls on the South Shore: Materials, Drainage and Permits',
    metaTitle: 'Retaining Wall Guide for the South Shore, MA | Oliveira Landscaping',
    metaDescription:
      'Block, natural stone or boulder? How retaining walls are built to survive Massachusetts winters, why drainage matters, and when a permit is needed.',
    category: 'Hardscape',
    date: '2026-11-17',
    updated: '2026-11-17',
    cover: '/images/projects/stone-wall-restoration/stone-wall-restoration-03.jpg',
    coverAlt: 'Restored granite fieldstone retaining wall on the South Shore of Massachusetts',
    excerpt:
      'A retaining wall can turn a slope into usable yard — or fail in a few winters if drainage is ignored. Here is what to know before you build one.',
    quickAnswer:
      'A retaining wall that lasts in Massachusetts needs three things: a compacted gravel footing, free-draining crushed stone behind the wall with a perforated drain pipe at the base, and a slight backward lean (setback). In Massachusetts, walls taller than about 4 feet generally require a building permit and an engineered design, so check with your town building department first.',
    takeaways: [
      'Water pressure behind the wall, not the weight of soil alone, is what pushes most walls over.',
      'Clean crushed stone and a perforated pipe behind the wall relieve that pressure.',
      'Segmental block, natural stone and boulders all work; the right choice depends on height, style and budget.',
      'Walls over roughly 4 feet usually need engineering and a permit in Massachusetts.',
    ],
    body: [
      { type: 'h2', text: 'Why retaining walls fail' },
      {
        type: 'p',
        text: "When we're called to fix a leaning or bulging wall on the South Shore, the cause is almost always water. Rain and snowmelt soak the soil behind the wall, the soil gets heavier, and in winter it freezes and expands. If that water has no way out, the pressure builds every season until the wall tips, bulges or collapses.",
      },
      { type: 'h2', text: 'How a durable retaining wall is built' },
      { type: 'ol', items: [
        '**Excavate and build a footing** — a trench dug below the first course and filled with compacted gravel gives the wall a stable, level base.',
        '**Bury the first course** — part of the bottom row sits below grade so the wall can’t kick out at the base.',
        '**Install drainage** — a perforated pipe at the base of the wall, wrapped or set in clean stone, carries water out to daylight or a dry well.',
        '**Backfill with crushed stone** — roughly 12 inches of clean, angular stone directly behind the wall lets water drain down instead of pushing outward.',
        '**Set back each course** — each row steps back slightly into the hill so the wall leans into the load.',
        '**Reinforce taller walls** — larger segmental walls use geogrid layers tied into the soil behind them, per the manufacturer and engineer specifications.',
      ] },
      { type: 'h2', text: 'Choosing a material' },
      {
        type: 'table',
        head: ['Material', 'Best for', 'Look'],
        rows: [
          ['Segmental concrete block', 'Straight or curved walls, steps, terraces', 'Uniform, clean, many colors'],
          ['Natural fieldstone / granite', 'Classic New England properties, wall restorations', 'Timeless, rustic, one of a kind'],
          ['Boulders', 'Wooded lots, low terraces, large slopes', 'Natural and bold'],
          ['Riprap (loose stone)', 'Steep banks and erosion control', 'Rugged, functional'],
        ],
      },
      {
        type: 'p',
        text: 'Fieldstone walls are part of the South Shore landscape, and many older properties have walls that just need resetting. See our [granite fieldstone wall restoration](/gallery/stone-wall-restoration), a [boulder wall on a regraded wooded lot](/gallery/wooded-lot-regrade) and a [riprap slope with river-stone borders](/gallery/riprap-river-stone-borders).',
      },
      { type: 'h2', text: 'Do you need a permit?' },
      {
        type: 'p',
        text: "Building codes generally treat retaining walls over about 4 feet tall (measured from the bottom of the footing to the top of the wall), or walls holding back a driveway, structure or other extra load, as structures that need an engineered design and a building permit. Every town applies the Massachusetts State Building Code through its own building department, so a quick call before you start is always worth it.",
      },
      {
        type: 'tip',
        text: 'If the wall is near a pond, stream, marsh or the coast, work within 100 feet of a wetland resource area may also need review by your town Conservation Commission under the Massachusetts Wetlands Protection Act.',
      },
      { type: 'h2', text: 'Signs your existing wall needs attention' },
      { type: 'ul', items: [
        'The wall is leaning forward or bulging in the middle.',
        'Stones or blocks have shifted, cracked or fallen out.',
        'Soil is washing out through the joints or at the base.',
        'Water pools behind the wall or seeps through after rain.',
      ] },
      {
        type: 'p',
        text: 'Catching these early usually means a partial rebuild with new drainage instead of starting over. Learn more about our [retaining and stone wall work](/services/retaining-walls-stone-walls) or [request a free estimate](/contact).',
      },
    ],
    faq: [
      ['What is the best material for a retaining wall in Massachusetts?', 'Segmental concrete block, natural fieldstone or granite, and boulders all hold up well. The bigger factor is construction: a compacted gravel footing, drainage stone and a perforated pipe behind the wall.'],
      ['How tall can a retaining wall be without a permit in Massachusetts?', 'As a general rule, walls up to about 4 feet that are not holding back an extra load are often exempt, while taller walls need an engineered design and a permit. Always confirm with your local building department.'],
      ['Why is my retaining wall leaning?', 'Most leaning walls are caused by water pressure and frost behind the wall, usually because there is no drainage stone or drain pipe, or the footing was too shallow.'],
      ['Can an old stone wall be repaired instead of replaced?', 'Often, yes. Fallen or leaning sections of fieldstone walls can be taken down, given a better base and drainage, and rebuilt with the original stone.'],
    ],
    services: ['retaining-walls-stone-walls', 'grading-drainage'],
    projects: ['stone-wall-restoration', 'wooded-lot-regrade', 'riprap-river-stone-borders'],
  },

  {
    slug: 'spring-cleanup-checklist-south-shore',
    title: 'Spring Clean-up Checklist for South Shore Yards',
    metaTitle: 'Spring Clean-up Checklist for South Shore, MA Yards | Oliveira',
    metaDescription:
      "A step-by-step spring clean-up checklist for Massachusetts yards: timing, beds, pruning, lawn care and mulch, from a South Shore landscaping crew.",
    category: 'Seasonal Care',
    date: '2026-11-17',
    updated: '2026-11-17',
    cover: '/images/projects/spring-cleanup-mulch/spring-cleanup-mulch-01.jpg',
    coverAlt: 'Spring clean-up with fresh mulch beds on a South Shore, MA property',
    excerpt:
      'Winter leaves South Shore yards matted, littered and soggy. Here is what to do, in what order, to get your property ready for the season.',
    quickAnswer:
      'On the South Shore, spring clean-ups usually start in late March or April, once the ground is no longer soggy. The order that works best is: clear leaves and storm debris, cut back perennials and grasses, prune shrubs that bloom in summer, edge the beds, rake and treat the lawn, then finish with fresh mulch.',
    takeaways: [
      'Wait until the soil is firm; walking on saturated lawns and beds compacts the soil.',
      'Do not prune spring-flowering shrubs like lilac, forsythia and rhododendron until after they bloom.',
      'Edge beds before mulching for a clean line that holds all season.',
      'Massachusetts law prohibits applying fertilizer to turf between December 1 and March 1.',
    ],
    body: [
      { type: 'h2', text: 'When to start' },
      {
        type: 'p',
        text: 'Timing depends on the year, but most South Shore properties are ready between late March and the end of April. A simple test: if your footprints sink into the lawn or water squishes up, wait a few more days. Working wet soil compacts it, and compacted soil grows weak grass and stunted plants all summer.',
      },
      { type: 'h2', text: 'The checklist' },
      { type: 'h3', text: '1. Clear leaves and storm debris' },
      {
        type: 'p',
        text: "Fallen branches, matted leaves and anything the plows pushed onto the lawn come out first. Leaves left on the lawn over winter smother the grass and invite snow mold, so rake them out of the turf and out of the beds.",
      },
      { type: 'h3', text: '2. Cut back perennials and ornamental grasses' },
      {
        type: 'p',
        text: 'Cut last year’s dead stems down to just above the new growth. Ornamental grasses should be cut back before the new blades get tall, otherwise you end up trimming the fresh growth too.',
      },
      { type: 'h3', text: '3. Prune the right shrubs' },
      { type: 'ul', items: [
        '**Prune now:** summer-blooming shrubs such as panicle hydrangeas, spirea, butterfly bush and roses, plus broken or winter-damaged branches on anything.',
        '**Wait until after flowering:** lilac, forsythia, rhododendron, azalea and other spring bloomers set their buds last year, so pruning now removes this year’s flowers.',
      ] },
      { type: 'h3', text: '4. Edge the beds' },
      {
        type: 'p',
        text: 'A crisp, cut edge between lawn and bed is what makes a property look finished. It also keeps grass from creeping into the bed and mulch from washing onto the lawn. For a permanent line, consider [steel or granite edging](/gallery/granite-bed-edging).',
      },
      { type: 'h3', text: '5. Wake up the lawn' },
      { type: 'ul', items: [
        'Rake out thatch and matted areas to let air and light reach the soil.',
        'Repair plow and salt damage along the driveway and street edges.',
        'Apply crabgrass pre-emergent around the time forsythia blooms, when soil temperatures reach about 55°F.',
        'Fertilize only after March 1, and follow the Massachusetts plant nutrient rules: phosphorus only when a soil test shows it is needed or when establishing a new lawn.',
      ] },
      { type: 'h3', text: '6. Mulch last' },
      {
        type: 'p',
        text: 'Fresh mulch goes down once the beds are cleaned, weeded and edged. Two to three inches is enough; more than that can suffocate roots. Our [mulch guide](/blog/how-much-mulch-do-i-need) shows how to calculate exactly how much you need.',
      },
      {
        type: 'tip',
        text: 'Keep mulch a few inches away from tree trunks and shrub stems. The “mulch volcano” piled against trunks traps moisture and invites rot and pests.',
      },
      { type: 'h2', text: 'Want it done in a day?' },
      {
        type: 'p',
        text: "A full spring clean-up is one of the most requested jobs we do, from small yards in Brockton and Whitman to estates in [Norwell](/service-areas/norwell) and [Hingham](/service-areas/hingham). See a [spring clean-up and fresh mulch project](/gallery/spring-cleanup-mulch), learn about our [lawn care and seasonal clean-ups](/services/lawn-care-cleanups), or [book yours](/contact) before the spring schedule fills up.",
      },
    ],
    faq: [
      ['When should I do a spring clean-up in Massachusetts?', 'Usually late March through April, once the soil has dried out enough that you are not leaving footprints in the lawn.'],
      ['Should I remove leaves from flower beds in spring?', 'Yes. Clear matted leaves from beds and lawns so the soil can warm up and new growth gets light and air. Leaves can be composted.'],
      ['When can I fertilize my lawn in Massachusetts?', 'Not between December 1 and March 1. After that, follow the state plant nutrient rules, which limit phosphorus on established lawns unless a soil test shows a need.'],
      ['How thick should mulch be?', 'Two to three inches in beds, kept a few inches away from trunks and stems.'],
    ],
    services: ['lawn-care-cleanups', 'mulching-bed-edging'],
    projects: ['spring-cleanup-mulch', 'edging-bed-refresh', 'norwell-estate-cleanup'],
  },

  {
    slug: 'fall-cleanup-winter-prep-new-england',
    title: 'Fall Clean-up and Winter Prep for New England Yards',
    metaTitle: 'Fall Clean-up & Winter Prep for Massachusetts Yards | Oliveira',
    metaDescription:
      'Leaves, last mow, aeration, overseeding, perennials and plow prep: a fall clean-up guide for South Shore, MA homeowners before winter sets in.',
    category: 'Seasonal Care',
    date: '2026-11-17',
    updated: '2026-11-17',
    cover: '/images/projects/norwell-estate-cleanup/norwell-estate-cleanup-06.jpg',
    coverAlt: 'Fall estate clean-up and bed restoration in Norwell, MA',
    excerpt:
      'What you do in October and November decides how your lawn and beds look next April. Here is a practical fall plan for South Shore properties.',
    quickAnswer:
      'A good fall clean-up in Massachusetts removes leaves before they mat down, includes a final mow at about 2.5 to 3 inches, cuts back spent perennials, protects shrubs from road salt and wind, and marks driveway edges for the plow. Late August to mid-September is the best window to aerate and overseed cool-season lawns.',
    takeaways: [
      'Remove leaves from the lawn before snow arrives; matted leaves cause bare spots and snow mold.',
      'Late summer to early fall is the prime time to aerate and overseed in New England.',
      'Wrap or screen salt-sensitive shrubs along roads and driveways.',
      'Stake driveway and walkway edges so plows don’t tear up lawns, beds and borders.',
    ],
    body: [
      { type: 'h2', text: 'Start with the lawn' },
      {
        type: 'p',
        text: 'Cool-season grasses like Kentucky bluegrass, fescues and ryegrass do most of their root growth in the fall. That makes late August through mid-September the best time to **core aerate and overseed** on the South Shore: the soil is still warm, nights are cool, and weeds are slowing down.',
      },
      { type: 'ul', items: [
        'Keep mowing as long as the grass grows; finish with a final cut around 2.5 to 3 inches.',
        'Keep leaves off the turf. A layer of wet leaves blocks light and leads to dead patches by spring.',
        'Water new seed lightly and often until it is established.',
      ] },
      { type: 'h2', text: 'Leaves: when and how often' },
      {
        type: 'p',
        text: 'Oaks and maples across the South Shore drop at different times, so one leaf clean-up rarely catches everything. Many of our customers book two visits: one in late October and a final one in November after the oaks let go. Leaves come out of the lawn, the beds and the corners where they pile up against fences and foundations.',
      },
      { type: 'h2', text: 'Beds and perennials' },
      { type: 'ul', items: [
        'Cut back perennials that turn mushy after frost, like hostas and daylilies.',
        'Leave sturdy seed heads such as coneflower and ornamental grasses if you like winter interest and want to feed birds.',
        'Remove annuals and any diseased foliage so problems don’t overwinter.',
        'Hold off on heavy pruning; cuts made now can encourage tender growth that freezes.',
      ] },
      { type: 'h2', text: 'Protect against salt, wind and plows' },
      {
        type: 'p',
        text: 'Road salt and plow damage are two of the most common winter problems we repair in spring. A few simple steps in the fall prevent most of them:',
      },
      { type: 'ol', items: [
        '**Burlap screens** on the street side of salt-sensitive shrubs and young evergreens.',
        '**Driveway stakes** along edges, beds and borders so plow drivers can see where the pavement ends.',
        '**Anti-desiccant spray** on broadleaf evergreens like rhododendrons in exposed, windy spots, especially on coastal properties.',
        '**Clear gutters and downspouts** so meltwater drains away from the house instead of freezing against the foundation.',
      ] },
      {
        type: 'tip',
        text: 'Fall is also the best time to plan spring hardscape projects. Booking a patio or wall in winter usually gets you an early spot on the schedule once the ground thaws.',
      },
      { type: 'h2', text: 'Need help before the snow?' },
      {
        type: 'p',
        text: 'Our [lawn care and seasonal clean-up crews](/services/lawn-care-cleanups) handle leaf removal, bed cut-backs and winter prep across the South Shore. Take a look at this [Norwell estate clean-up and bed restoration](/gallery/norwell-estate-cleanup), then [get a free quote](/contact).',
      },
    ],
    faq: [
      ['When is the best time to overseed a lawn in Massachusetts?', 'Late August through mid-September, when the soil is still warm and the nights are cool. That gives new grass time to establish before winter.'],
      ['How short should I cut my grass for the last mow?', 'About 2.5 to 3 inches. Cutting much shorter stresses the grass; leaving it very long can mat down under snow.'],
      ['Is it bad to leave leaves on the lawn over winter?', 'Yes. A thick layer of wet leaves blocks light and air, which leads to dead patches and snow mold. A light layer that you mulch with the mower is fine.'],
      ['Should I cut back perennials in the fall?', 'Cut back plants that turn mushy after frost and anything diseased. Sturdy stems and seed heads can stay for winter interest and wildlife.'],
    ],
    services: ['lawn-care-cleanups', 'landscape-installation'],
    projects: ['norwell-estate-cleanup', 'lawn-care', 'spring-cleanup-mulch'],
  },

  {
    slug: 'how-much-mulch-do-i-need',
    title: 'How Much Mulch Do I Need? (Simple Formula + Chart)',
    metaTitle: 'How Much Mulch Do I Need? Formula & Chart | Oliveira Landscaping',
    metaDescription:
      'Calculate mulch in cubic yards in seconds: square feet × depth in inches ÷ 324. Includes a quick chart, bag conversions and mulching tips for MA yards.',
    category: 'Planting & Beds',
    date: '2026-11-17',
    updated: '2026-11-17',
    cover: '/images/projects/red-mulch-refresh/red-mulch-refresh-01.jpg',
    coverAlt: 'Freshly mulched red mulch beds on a South Shore, MA home',
    excerpt:
      'Ordering too little mulch means a second trip; ordering too much means a pile in your driveway. Here is the quick math.',
    quickAnswer:
      'To find how much mulch you need in cubic yards, multiply the bed area in square feet by the depth in inches, then divide by 324. For example, 300 square feet at 3 inches deep is 300 × 3 ÷ 324 ≈ 2.8 cubic yards. One cubic yard covers about 108 square feet at 3 inches, and it equals roughly 13.5 standard 2-cubic-foot bags.',
    takeaways: [
      'Formula: square feet × depth (inches) ÷ 324 = cubic yards.',
      '2 to 3 inches is the right depth for most beds; top-ups usually need only 1 to 2 inches.',
      'One cubic yard ≈ 13.5 bags of 2 cubic feet.',
      'Keep mulch a few inches away from trunks and stems.',
    ],
    body: [
      { type: 'h2', text: 'The formula' },
      {
        type: 'p',
        text: 'Mulch is sold by the cubic yard. One cubic yard is 27 cubic feet, and there are 12 inches in a foot, so 27 × 12 = 324. That gives a formula anyone can do on a phone calculator:',
      },
      { type: 'tip', text: '**Cubic yards = square feet × depth in inches ÷ 324**' },
      { type: 'h3', text: 'Step by step' },
      { type: 'ol', items: [
        'Measure each bed’s length and width in feet and multiply them to get square feet. For curved or odd shapes, break them into rough rectangles and add them up.',
        'Pick a depth: 3 inches for new or bare beds, 1 to 2 inches to refresh beds that were mulched last year.',
        'Multiply square feet by depth, divide by 324, and round up to the nearest half yard.',
      ] },
      { type: 'h2', text: 'Quick chart' },
      {
        type: 'table',
        head: ['Bed area', 'At 2 inches', 'At 3 inches'],
        rows: [
          ['100 sq ft', '0.6 cu yd', '0.9 cu yd'],
          ['200 sq ft', '1.2 cu yd', '1.9 cu yd'],
          ['300 sq ft', '1.9 cu yd', '2.8 cu yd'],
          ['500 sq ft', '3.1 cu yd', '4.6 cu yd'],
          ['1,000 sq ft', '6.2 cu yd', '9.3 cu yd'],
        ],
      },
      { type: 'h2', text: 'Bags vs. bulk' },
      {
        type: 'p',
        text: 'A standard bag holds 2 cubic feet, so it takes about **13.5 bags to equal one cubic yard**. Bags are convenient for a small bed or two. For anything over a yard or so, bulk mulch delivered or installed by a crew is usually cheaper, faster and creates far less plastic waste.',
      },
      { type: 'h2', text: 'Mulching tips that make a difference' },
      { type: 'ul', items: [
        '**Edge and weed first.** Mulch on top of weeds just hides them for a few weeks.',
        '**Don’t over-mulch.** Beds that get 3 new inches every year build up into a thick mat that sheds water and starves roots of air. Top up instead.',
        '**No mulch volcanoes.** Keep mulch a few inches away from tree trunks and shrub stems.',
        '**Pick a color that fits the house.** Dark brown and black are classic; red makes a bold statement, like this [red mulch refresh](/gallery/red-mulch-refresh) and this [estate mulch and driveway project](/gallery/mulch-driveway-estate).',
      ] },
      { type: 'h2', text: 'Let us do the math (and the shoveling)' },
      {
        type: 'p',
        text: 'We measure, edge, weed and install bulk mulch on properties of every size across the South Shore. Learn more about our [mulching and bed edging service](/services/mulching-bed-edging) or [ask for a free estimate](/contact).',
      },
    ],
    faq: [
      ['How many square feet does a yard of mulch cover?', 'About 108 square feet at 3 inches deep, 162 square feet at 2 inches, and 324 square feet at 1 inch.'],
      ['How many bags of mulch are in a yard?', 'About 13.5 bags of the standard 2-cubic-foot size.'],
      ['How deep should mulch be?', 'Two to three inches for most beds. If the beds were mulched last year, a 1 to 2 inch top-up is usually enough.'],
      ['Should I remove old mulch before adding new?', 'Not usually. Break up any crusted or matted layer, then top up. Remove old mulch only if it has built up too thick or is piled against stems.'],
    ],
    services: ['mulching-bed-edging', 'lawn-care-cleanups'],
    projects: ['red-mulch-refresh', 'mulch-driveway-estate', 'edging-bed-refresh'],
  },

  {
    slug: 'yard-drainage-solutions-massachusetts',
    title: 'Standing Water in Your Yard? Drainage Solutions for Massachusetts Homes',
    metaTitle: 'Yard Drainage Solutions in Massachusetts | Oliveira Landscaping',
    metaDescription:
      'Soggy lawn or water near the foundation? Regrading, French drains, dry wells and trench drains explained for South Shore, MA properties.',
    category: 'Grading & Drainage',
    date: '2026-11-17',
    updated: '2026-11-17',
    cover: '/images/projects/granite-apron-trench-drain/granite-apron-trench-drain-03.jpg',
    coverAlt: 'Granite apron and trench drain installed to solve a driveway drainage problem',
    excerpt:
      'Puddles that never dry, a wet basement, ice sheets on the driveway — most drainage problems come down to grade. Here are the fixes that work.',
    quickAnswer:
      'Most yard drainage problems are fixed by regrading so the ground slopes away from the house, at least 6 inches of fall over the first 10 feet. When grading alone is not enough, the usual solutions are downspout extensions, a French drain to carry water away underground, a dry well to let it soak in, or a trench drain across a driveway or patio.',
    takeaways: [
      'The ground should drop at least 6 inches over the first 10 feet away from your foundation.',
      'Fix the source of the water first: downspouts and roof runoff are the most common culprits.',
      'French drains move water; dry wells store and absorb it; trench drains catch it across hard surfaces.',
      'Work near wetlands may need Conservation Commission approval in Massachusetts.',
    ],
    body: [
      { type: 'h2', text: 'Find the source first' },
      {
        type: 'p',
        text: 'Before digging anything, watch your property during a heavy rain. Where does the water come from, and where does it stop? On the South Shore, the most common sources are:',
      },
      { type: 'ul', items: [
        'Downspouts dumping roof water right next to the foundation.',
        'A yard that slopes toward the house instead of away from it, often after years of settling.',
        'Heavy, compacted clay or fill soil that won’t absorb water.',
        'Runoff from a neighbor’s property, a driveway or the street.',
        'A high water table in low-lying and coastal areas.',
      ] },
      { type: 'h2', text: 'Solution 1: Regrading' },
      {
        type: 'p',
        text: 'Grade is the foundation of every drainage fix. Residential building codes call for the ground to fall at least **6 inches within the first 10 feet** from the foundation. We bring in screened loam, shape the slope with machines, and finish with seed or sod. Our [Hingham yard renovation](/gallery/hingham-yard-renovation) and [wooded lot regrade](/gallery/wooded-lot-regrade) are good examples.',
      },
      { type: 'h2', text: 'Solution 2: Downspout extensions and buried lines' },
      {
        type: 'p',
        text: 'Sometimes the simplest fix is moving roof water farther away. Downspouts can be tied into a buried solid pipe that carries water out to a lower part of the yard, a dry well or daylight.',
      },
      { type: 'h2', text: 'Solution 3: French drains' },
      {
        type: 'p',
        text: 'A French drain is a trench lined with fabric, filled with clean stone and a perforated pipe, and pitched toward an outlet. It collects water underground along its length and carries it away. It works well along the uphill side of a house, at the base of a slope, or across a lawn that stays soggy.',
      },
      { type: 'h2', text: 'Solution 4: Dry wells' },
      {
        type: 'p',
        text: 'When there is nowhere downhill to send the water, a dry well stores it underground and lets it soak slowly into the surrounding soil. Dry wells work best in sandy or gravelly soils, which are common in many parts of Plymouth County.',
      },
      { type: 'h2', text: 'Solution 5: Trench drains' },
      {
        type: 'p',
        text: 'A trench drain is a channel with a grate set into a driveway, patio or apron. It catches sheet runoff before it reaches a garage, door or walkway. See our [granite apron and trench drain project](/gallery/granite-apron-trench-drain).',
      },
      {
        type: 'table',
        head: ['Problem', 'Usual fix'],
        rows: [
          ['Water against the foundation', 'Regrade + downspout extensions'],
          ['Soggy strip of lawn', 'French drain'],
          ['Low spot with no outlet', 'Dry well or regrade'],
          ['Driveway runoff into the garage', 'Trench drain'],
          ['Eroding slope', 'Retaining wall, riprap or plantings'],
        ],
      },
      {
        type: 'tip',
        text: 'Before any digging, Massachusetts law requires a call to Dig Safe (811) so underground utilities are marked. A professional contractor handles this for you.',
      },
      { type: 'h2', text: 'Wetlands and coastal properties' },
      {
        type: 'p',
        text: 'If your property is near a wetland, stream, pond or the coast, grading and drainage work within 100 feet of the resource area may need approval from your town’s Conservation Commission. It’s a routine step, but it has to happen before work starts.',
      },
      {
        type: 'p',
        text: 'We diagnose and fix drainage problems across the South Shore. See our [grading and drainage service](/services/grading-drainage) or [schedule a free site visit](/contact).',
      },
    ],
    faq: [
      ['How do I fix standing water in my yard?', 'Start by finding the source. Most cases are solved by regrading so water flows away from the house, often combined with downspout extensions, a French drain or a dry well.'],
      ['How much should the yard slope away from the house?', 'At least 6 inches of drop over the first 10 feet away from the foundation, which is the standard in residential building codes.'],
      ['What is the difference between a French drain and a dry well?', 'A French drain collects water and carries it somewhere else through a perforated pipe. A dry well stores water underground and lets it soak into the soil.'],
      ['Do I need a permit for yard drainage work in Massachusetts?', 'Regular drainage work usually does not need a building permit, but work near wetlands or the coast may need Conservation Commission approval, and digging always requires a Dig Safe call.'],
    ],
    services: ['grading-drainage', 'retaining-walls-stone-walls'],
    projects: ['granite-apron-trench-drain', 'hingham-yard-renovation', 'wooded-lot-regrade'],
  },

  {
    slug: 'coastal-landscaping-south-shore-salt-tolerant-plants',
    title: 'Coastal Landscaping on the South Shore: Salt-Tolerant Plants and Smart Design',
    metaTitle: 'Coastal Landscaping & Salt-Tolerant Plants | South Shore, MA',
    metaDescription:
      'Salt spray, wind and sandy soil: the plants, materials and design choices that hold up on coastal properties in Hull, Scituate, Marshfield and Duxbury.',
    category: 'Planting & Beds',
    date: '2026-11-17',
    updated: '2026-11-17',
    cover: '/images/projects/hingham-yard-renovation/hingham-yard-renovation-11.jpg',
    coverAlt: 'Renovated yard with new lawn and paver walkway in Hingham, MA',
    excerpt:
      'Properties near the water in Hull, Cohasset, Scituate, Marshfield and Duxbury face conditions inland yards never see. Plan for them and the landscape thrives.',
    quickAnswer:
      'Coastal South Shore landscapes do best with native, salt-tolerant plants such as northern bayberry, beach plum, inkberry holly, eastern red cedar, switchgrass and little bluestem, planted in amended sandy soil and grouped to break the wind. Durable hardscape, like granite, natural stone and permeable pavers, handles salt and storms better than wood or thin concrete.',
    takeaways: [
      'Salt spray, constant wind and fast-draining sandy soil are the three coastal challenges.',
      'Native coastal plants are adapted to all three and need less watering and care.',
      'Plant tougher species on the windward side to shelter more delicate plants.',
      'Work near dunes, coastal banks and marshes usually needs Conservation Commission review.',
    ],
    body: [
      { type: 'h2', text: 'What makes coastal yards different' },
      { type: 'ul', items: [
        '**Salt spray** burns leaves and needles, especially on the side facing the water.',
        '**Wind** dries plants out year-round and can knock over young trees.',
        '**Sandy soil** drains fast and holds few nutrients, so plants dry out quickly.',
        '**Storms and flooding** can bring salt water and debris right into the yard.',
      ] },
      { type: 'h2', text: 'Salt-tolerant plants that work here' },
      {
        type: 'table',
        head: ['Plant', 'Type', 'Why it works'],
        rows: [
          ['Northern bayberry', 'Shrub', 'Native, semi-evergreen, thrives in sand and salt spray'],
          ['Beach plum', 'Shrub', 'Native, white spring flowers, very salt and wind tolerant'],
          ['Inkberry holly', 'Evergreen shrub', 'Native, good hedge or foundation plant'],
          ['Eastern red cedar', 'Evergreen tree', 'Native, tough windbreak and screen'],
          ['Switchgrass', 'Ornamental grass', 'Deep roots stabilize soil; great fall color'],
          ['Little bluestem', 'Ornamental grass', 'Native, drought tolerant, blue-green to copper'],
          ['Seaside goldenrod', 'Perennial', 'Native, late-season color for pollinators'],
          ['Bearberry', 'Groundcover', 'Native evergreen mat for sandy slopes'],
        ],
      },
      {
        type: 'p',
        text: 'Use more sensitive favorites, like many hydrangeas and Japanese maples, in protected spots behind the house or behind a windbreak rather than in the direct line of salt spray.',
      },
      { type: 'h2', text: 'Design tips for the coast' },
      { type: 'ol', items: [
        '**Build a windbreak first.** A layered row of red cedar, bayberry and inkberry on the windward side shelters everything behind it.',
        '**Amend the soil.** Mixing compost into sandy soil helps it hold water and nutrients so new plantings establish.',
        '**Group plants by need.** Toughest plants face the water; delicate ones go in the lee of the house.',
        '**Choose durable hardscape.** Granite, natural stone and quality concrete pavers shrug off salt. Permeable pavers or gravel let storm water soak in instead of running off.',
        '**Water deeply, less often.** In the first season, deep weekly watering builds roots that can reach moisture on their own.',
      ] },
      {
        type: 'tip',
        text: 'Many coastal lots fall within resource areas protected by the Massachusetts Wetlands Protection Act, such as dunes, coastal banks and salt marshes. Check with your town Conservation Commission before regrading, removing vegetation or building walls near the water.',
      },
      { type: 'h2', text: 'Coastal towns we serve' },
      {
        type: 'p',
        text: 'Our crews regularly work in [Hull](/service-areas/hull), [Cohasset](/service-areas/cohasset), [Scituate](/service-areas/scituate), [Marshfield](/service-areas/marshfield), [Duxbury](/service-areas/duxbury), [Hingham](/service-areas/hingham) and [Plymouth](/service-areas/plymouth). If you are planning new plantings or a patio near the water, see our [landscape design and plantings service](/services/landscape-installation) and [get a free estimate](/contact).',
      },
    ],
    faq: [
      ['What plants tolerate salt spray in Massachusetts?', 'Native coastal plants such as northern bayberry, beach plum, inkberry holly, eastern red cedar, switchgrass, little bluestem, seaside goldenrod and bearberry are all very salt tolerant.'],
      ['How do I protect my landscape from coastal wind?', 'Plant a layered windbreak of tough evergreens and shrubs on the windward side, then put more delicate plants in the shelter behind it.'],
      ['Are pavers a good choice near the ocean?', 'Yes. Dense concrete pavers and natural stone hold up well to salt and freeze-thaw cycles, and permeable pavers help storm water soak in.'],
      ['Do I need permission to landscape near the water?', 'Work near dunes, coastal banks, beaches and salt marshes is often reviewed by the town Conservation Commission under the Wetlands Protection Act. Check before you start.'],
    ],
    services: ['landscape-installation', 'paver-patios-walkways', 'grading-drainage'],
    projects: ['hingham-yard-renovation', 'riprap-river-stone-borders', 'foundation-planting-brick-walk'],
  },

  {
    slug: 'best-evergreens-privacy-screen-massachusetts',
    title: 'The Best Evergreens for a Privacy Screen in Massachusetts',
    metaTitle: 'Best Evergreens for Privacy Screens in Massachusetts | Oliveira',
    metaDescription:
      'Green Giant arborvitae, Norway spruce, red cedar and more: which evergreens make the best privacy screens in MA, how far apart to plant, and deer tips.',
    category: 'Planting & Beds',
    date: '2026-11-17',
    updated: '2026-11-17',
    cover: '/images/projects/evergreen-privacy-screen/evergreen-privacy-screen-12.jpg',
    coverAlt: 'Newly planted evergreen privacy screen on a South Shore, MA property',
    excerpt:
      'A living privacy screen blocks views, wind and noise year-round. Choosing the right tree for your space and your deer pressure is half the job.',
    quickAnswer:
      "For most Massachusetts yards, 'Green Giant' arborvitae is the best all-around privacy screen: it grows fast, stays dense and resists deer better than other arborvitae. Narrow spaces suit 'Emerald Green' arborvitae, wide properties suit Norway spruce, and coastal or dry sites suit native eastern red cedar. Plant in spring or early fall and water deeply through the first season.",
    takeaways: [
      "'Green Giant' arborvitae: fast, dense, deer-resistant compared to other arborvitae; plant about 5 to 6 feet apart.",
      "'Emerald Green' arborvitae: narrow and tidy, but a favorite food for deer.",
      'Norway spruce and white pine need a lot of room; red cedar handles salt and dry soil.',
      'A staggered double row fills in faster and looks more natural than a single straight line.',
    ],
    body: [
      { type: 'h2', text: 'Compare the top choices' },
      {
        type: 'table',
        head: ['Tree', 'Mature width', 'Typical spacing', 'Notes'],
        rows: [
          ["'Green Giant' arborvitae", '12–20 ft', '5–6 ft', 'Fast grower, dense, more deer-resistant than other arborvitae'],
          ["'Emerald Green' arborvitae", '3–4 ft', '3 ft', 'Narrow, great for tight side yards; deer browse it heavily'],
          ['Norway spruce', '25–30 ft', '10–12 ft', 'Fast, tough, very large; for big properties'],
          ['Eastern white pine', '20–40 ft', '10–15 ft', 'Soft, native; loses lower branches with age; dislikes road salt'],
          ['Eastern red cedar', '8–15 ft', '6–8 ft', 'Native, handles salt, sand and drought'],
          ['American holly', '10–20 ft', '8–10 ft', 'Native broadleaf evergreen; slow but beautiful'],
        ],
      },
      { type: 'h2', text: 'Think about deer first' },
      {
        type: 'p',
        text: "Deer are everywhere on the South Shore, and in winter they eat arborvitae down to bare trunks as high as they can reach. If deer visit your yard, lean toward 'Green Giant' arborvitae, spruce or red cedar, or plan on netting or repellents for the first few winters.",
      },
      { type: 'h2', text: 'How to plant a screen that fills in' },
      { type: 'ol', items: [
        '**Measure the real space.** Check the mature width, not the size at planting, and keep trees well back from fences, driveways and property lines.',
        '**Stagger the rows.** Two offset rows create privacy faster and hide any single tree that struggles.',
        '**Dig wide, not deep.** The hole should be two to three times as wide as the root ball and no deeper; the root flare sits at or slightly above grade.',
        '**Mulch and water.** Two to three inches of mulch (not touching the trunks) and about an inch of water a week through the first growing season.',
        '**Plant at the right time.** Spring and early fall give roots time to establish before summer heat or the ground freezes.',
      ] },
      {
        type: 'tip',
        text: 'Mixing two or three species looks more natural and protects you if one species gets hit by pests, disease or deer.',
      },
      { type: 'h2', text: 'What if there are old trees in the way?' },
      {
        type: 'p',
        text: 'Overgrown, dying or storm-damaged trees often need to come out before a new screen goes in. We handle both: [tree removal and land clearing](/services/tree-removal-land-clearing) and new [landscape plantings](/services/landscape-installation). See a finished [evergreen privacy screen](/gallery/evergreen-privacy-screen) and a [woodland path with privacy fence](/gallery/woodland-path-fence).',
      },
      {
        type: 'p',
        text: 'Want privacy by next season? [Request a free estimate](/contact) and we will recommend the right trees for your yard.',
      },
    ],
    faq: [
      ['What is the fastest-growing evergreen for privacy in Massachusetts?', "'Green Giant' arborvitae and Norway spruce are among the fastest. 'Green Giant' can grow a few feet per year once established and stays dense from the ground up."],
      ['How far apart should I plant arborvitae for privacy?', "About 5 to 6 feet apart for 'Green Giant' and about 3 feet apart for narrow 'Emerald Green'. A staggered double row fills in faster."],
      ['Do deer eat arborvitae?', "Yes, deer browse arborvitae heavily in winter, especially 'Emerald Green'. 'Green Giant', spruce and red cedar are less appealing to them."],
      ['When is the best time to plant evergreens in Massachusetts?', 'Spring and early fall. Avoid planting in the peak of summer heat or too late in fall, when roots cannot establish before the ground freezes.'],
    ],
    services: ['landscape-installation', 'tree-removal-land-clearing'],
    projects: ['evergreen-privacy-screen', 'woodland-path-fence', 'foundation-planting-brick-walk'],
  },

  {
    slug: 'how-to-choose-landscaping-contractor-massachusetts',
    title: 'How to Choose a Landscaping Contractor in Massachusetts: 10 Questions to Ask',
    metaTitle: 'How to Choose a Landscaper in Massachusetts: 10 Questions',
    metaDescription:
      'Insurance, written estimates, base depth, Dig Safe, warranties and payment terms: the questions to ask before hiring a landscaper or hardscaper in MA.',
    category: 'Hiring Tips',
    date: '2026-11-17',
    updated: '2026-11-17',
    cover: '/images/projects/paver-apron-stone-walls/paver-apron-stone-walls-09.jpg',
    coverAlt: 'Paver walkway, granite curbing and stone walls completed by Oliveira Landscaping',
    excerpt:
      'A patio or wall is a long-term investment. These questions help you compare estimates fairly and avoid the most common hiring mistakes.',
    quickAnswer:
      'Before hiring a landscaping or hardscape contractor in Massachusetts, ask for proof of liability insurance and workers’ compensation, a detailed written estimate, photos and reviews of similar local jobs, how deep the base will be, who calls Dig Safe, what the warranty covers, and the payment schedule. Compare estimates line by line, not just by the final price.',
    takeaways: [
      'Ask for a certificate of insurance; it protects you if someone is hurt or property is damaged.',
      'A written, itemized estimate makes bids comparable.',
      'For hardscape, base depth and drainage are where cheap bids usually cut corners.',
      'In Massachusetts, the excavator must call Dig Safe (811) before digging.',
    ],
    body: [
      { type: 'h2', text: 'The 10 questions' },
      { type: 'h3', text: '1. Are you insured?' },
      {
        type: 'p',
        text: 'Ask for a certificate of general liability insurance, and workers’ compensation if the company has employees, which Massachusetts requires. If an uninsured worker is injured on your property, you could be exposed.',
      },
      { type: 'h3', text: '2. Can I get a detailed written estimate?' },
      {
        type: 'p',
        text: 'A good estimate lists the scope, materials, quantities, base and drainage work, cleanup and timeline. Vague one-line quotes make it impossible to compare bids and easy for surprises to show up later.',
      },
      { type: 'h3', text: '3. Can I see similar work you’ve done nearby?' },
      {
        type: 'p',
        text: 'Photos of real local jobs, ideally including before and in-progress shots, tell you much more than stock images. Our [project gallery](/gallery) shows every stage of the work, from the first dig to the finished result.',
      },
      { type: 'h3', text: '4. What do your reviews say?' },
      {
        type: 'p',
        text: 'Read recent Google reviews and look for patterns: punctuality, communication, cleanup and how problems were handled.',
      },
      { type: 'h3', text: '5. How deep will the base be? (hardscape)' },
      {
        type: 'p',
        text: 'For patios, walkways and walls, ask how much material will be excavated, what goes back in, and how it will be compacted. This is where low bids most often cut corners, and it is the difference between a patio that lasts decades and one that heaves after two winters. Our [paver vs. concrete guide](/blog/paver-patio-vs-concrete-patio-massachusetts) explains why.',
      },
      { type: 'h3', text: '6. How will water drain?' },
      {
        type: 'p',
        text: 'Every hardscape and grading project changes how water moves. Make sure the plan sends water away from your foundation and doesn’t just push it onto another part of your yard or your neighbor’s.',
      },
      { type: 'h3', text: '7. Who calls Dig Safe?' },
      {
        type: 'p',
        text: 'Massachusetts law requires whoever is excavating to notify Dig Safe (811) before digging so underground utilities are marked. A professional contractor takes care of this and waits for the markings.',
      },
      { type: 'h3', text: '8. Will you handle permits?' },
      {
        type: 'p',
        text: 'Taller retaining walls and work near wetlands can require a building permit or Conservation Commission review. Ask who is responsible for applying.',
      },
      { type: 'h3', text: '9. What is the warranty?' },
      {
        type: 'p',
        text: 'Ask what is covered (workmanship, settling, plant survival), for how long, and what happens if something needs attention.',
      },
      { type: 'h3', text: '10. What is the payment schedule?' },
      {
        type: 'p',
        text: 'A reasonable deposit to schedule the job and order materials is normal. Be cautious about paying most of the price up front before work begins.',
      },
      { type: 'h2', text: 'Red flags' },
      { type: 'ul', items: [
        'Pressure to sign the same day or pay mostly in cash up front.',
        'No written estimate, or one with no details.',
        'No proof of insurance.',
        'A price far below every other bid with no explanation.',
        'No local references or photos of real jobs.',
      ] },
      {
        type: 'tip',
        text: 'Compare estimates line by line. A higher bid that includes a deeper base, drainage and cleanup is often the better value.',
      },
      { type: 'h2', text: 'About us' },
      {
        type: 'p',
        text: "Oliveira Landscaping is a family-owned, licensed and insured company based in Bridgewater, MA, with 16+ years and 1,500+ projects across Boston's South Shore. Every job starts with a free, detailed written estimate. [Learn more about us](/about), browse our [services](/services), or [get in touch](/contact).",
      },
    ],
    faq: [
      ['What should I ask a landscaper before hiring?', 'Ask about insurance, a detailed written estimate, photos and reviews of similar local work, base and drainage details for hardscape, who handles Dig Safe and permits, the warranty, and the payment schedule.'],
      ['Do landscapers need insurance in Massachusetts?', 'Reputable landscapers carry general liability insurance, and Massachusetts requires workers’ compensation coverage for businesses with employees. Ask for a certificate.'],
      ['Who is responsible for calling Dig Safe?', 'In Massachusetts, the party doing the excavation must notify Dig Safe (811) before digging. On a contracted job, that is normally the contractor.'],
      ['Why are hardscape estimates so different?', 'Differences usually come from excavation depth, base material, drainage, edge details and cleanup. Compare estimates line by line to see what each one includes.'],
    ],
    services: ['paver-patios-walkways', 'retaining-walls-stone-walls', 'landscape-installation'],
    projects: ['paver-apron-stone-walls', 'curved-paver-walkway', 'hingham-yard-renovation'],
  },

  {
    slug: 'massachusetts-landscaping-calendar',
    title: 'A Month-by-Month Landscaping Calendar for Massachusetts',
    metaTitle: 'Month-by-Month Landscaping Calendar for Massachusetts | Oliveira',
    metaDescription:
      'When to clean up, seed, mulch, prune, plant and build patios in Massachusetts. A practical month-by-month yard calendar for the South Shore.',
    category: 'Seasonal Care',
    date: '2026-11-17',
    updated: '2026-11-17',
    cover: '/images/projects/lawn-care/lawn-care-01.jpg',
    coverAlt: 'Healthy green lawn and paver walkway at a South Shore, MA home',
    excerpt:
      'Every job in the yard has a right time. Use this calendar to plan clean-ups, lawn care, planting and hardscape projects through the year.',
    quickAnswer:
      'In Massachusetts, spring clean-ups and mulching happen in March through May, lawns are best seeded from late August to mid-September, trees and shrubs are best planted in spring or early fall, and hardscape like patios and walls can be built any time the ground is not frozen, roughly April through early December. Winter is the time to plan and book spring projects.',
    takeaways: [
      'March–May: clean-ups, edging, mulch, pre-emergent, planting.',
      'June–August: mowing high, deep watering, hardscape season in full swing.',
      'Late August–September: the best window to aerate and overseed.',
      'December–February: no fertilizer on turf by state law; plan and book spring work.',
    ],
    body: [
      { type: 'h2', text: 'Spring' },
      { type: 'h3', text: 'March' },
      { type: 'ul', items: [
        'Walk the property and note winter, plow and salt damage.',
        'Prune summer-blooming shrubs and remove broken branches while plants are dormant.',
        'Book spring clean-ups and hardscape projects; schedules fill quickly.',
      ] },
      { type: 'h3', text: 'April' },
      { type: 'ul', items: [
        'Full [spring clean-up](/blog/spring-cleanup-checklist-south-shore): leaves, debris, perennial cut-backs.',
        'Edge beds and apply crabgrass pre-emergent around forsythia bloom.',
        'Hardscape season starts once the ground thaws and dries.',
      ] },
      { type: 'h3', text: 'May' },
      { type: 'ul', items: [
        'Mulch beds (see [how much mulch you need](/blog/how-much-mulch-do-i-need)).',
        'Plant trees, shrubs and perennials; annuals after the last frost, usually mid-May.',
        'Prune spring bloomers like lilac and forsythia right after they finish flowering.',
      ] },
      { type: 'h2', text: 'Summer' },
      { type: 'h3', text: 'June – August' },
      { type: 'ul', items: [
        'Mow high (3 to 3.5 inches) so grass shades its roots and crowds out weeds.',
        'Water deeply and early in the morning, about an inch per week including rain.',
        'Keep new plantings watered through dry spells.',
        'Peak season for patios, walkways and walls.',
        'Late August: start aerating and overseeding.',
      ] },
      { type: 'h2', text: 'Fall' },
      { type: 'h3', text: 'September' },
      { type: 'ul', items: [
        'Best month for lawn renovation: aeration, overseeding and new lawns.',
        'Plant trees, shrubs and evergreen screens while soil is warm.',
        'Divide crowded perennials.',
      ] },
      { type: 'h3', text: 'October – November' },
      { type: 'ul', items: [
        'Leaf clean-ups, often two visits as oaks drop late.',
        'Final mow at 2.5 to 3 inches.',
        'Cut back mushy perennials; protect shrubs from salt and wind. See our [fall clean-up guide](/blog/fall-cleanup-winter-prep-new-england).',
        'Install driveway stakes before the first snow.',
      ] },
      { type: 'h2', text: 'Winter' },
      { type: 'h3', text: 'December – February' },
      { type: 'ul', items: [
        'No fertilizer on turf from December 1 to March 1 under Massachusetts law.',
        'Use salt sparingly near beds and lawns; calcium-based de-icers are gentler on plants.',
        'Brush heavy snow off shrubs gently to prevent breakage.',
        'Plan and price spring projects; hardscape work can continue on mild days until the ground freezes.',
      ] },
      {
        type: 'table',
        head: ['Task', 'Best months in MA'],
        rows: [
          ['Spring clean-up', 'Late March – April'],
          ['Mulching', 'April – May (top up in fall if needed)'],
          ['Seeding / overseeding', 'Late August – mid-September'],
          ['Planting trees & shrubs', 'April – May, September – October'],
          ['Pruning summer bloomers', 'Late winter – early spring'],
          ['Pruning spring bloomers', 'Right after flowering'],
          ['Patios, walkways, walls', 'April – early December'],
          ['Fall clean-up', 'Late October – November'],
        ],
      },
      {
        type: 'p',
        text: 'We handle the whole calendar, from [lawn care and clean-ups](/services/lawn-care-cleanups) to [plantings](/services/landscape-installation) and [patios](/services/paver-patios-walkways). [Get a free estimate](/contact) for any season.',
      },
    ],
    faq: [
      ['When does landscaping season start in Massachusetts?', 'Usually in late March or April, once the ground thaws and dries out. Spring clean-ups come first, followed by mulching, planting and hardscape work.'],
      ['Can patios be built in the winter in Massachusetts?', 'Hardscape can be built whenever the ground is not frozen, typically April through early December. Deep winter freezes usually pause excavation until spring.'],
      ['What is the best month to plant trees in Massachusetts?', 'September is often ideal, with spring (April to May) a close second. Both give roots time to establish before extreme heat or frozen ground.'],
      ['What should I do to my yard in winter?', 'Limit salt near plants, gently clear heavy snow from shrubs, skip fertilizer until March, and plan spring projects early.'],
    ],
    services: ['lawn-care-cleanups', 'landscape-installation', 'paver-patios-walkways'],
    projects: ['lawn-care', 'spring-cleanup-mulch', 'curved-paver-walkway'],
  },
];

export const POST_BY_SLUG = Object.fromEntries(BLOG_POSTS.map((p) => [p.slug, p]));

/** Inline markup → plain text (for meta, schema and llms-full.txt). */
export const plainText = (s) => s.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

/** Rough reading time from all text in a post. */
export function readMinutes(post) {
  const words = [
    post.quickAnswer,
    ...post.body.flatMap((b) => b.text || b.items || (b.rows ? b.rows.flat() : [])),
    ...post.faq.flat(),
  ].join(' ').split(/\s+/).length;
  return Math.max(3, Math.round(words / 220));
}
