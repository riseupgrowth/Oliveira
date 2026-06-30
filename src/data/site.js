// Central business information (NAP) and site-wide content.
// Edit values here once and they update everywhere across the site.

export const BUSINESS = {
  name: 'Oliveira Landscaping Construction',
  shortName: 'Oliveira Landscaping',
  tagline: 'South Shore Landscaping & Hardscape, Done Right',
  phoneDisplay: '+1 (774) 297-3349',
  phoneHref: 'tel:+17742973349',
  whatsappHref: 'https://wa.me/17742973349',
  email: 'oliveiracorporation2016@gmail.com',
  address: {
    street: '50 Whitman Street',
    city: 'Bridgewater',
    state: 'MA',
    zip: '02324',
    full: '50 Whitman Street, Bridgewater, MA 02324',
  },
  region: 'Boston South Shore',
  hours: 'Mon–Sat: 7:00 AM – 6:00 PM',
  yearsExperience: '16',
  projectsCompleted: '1500',
  founded: 2014,
  logo: 'https://horizons-cdn.hostinger.com/bf54a58c-e480-4deb-add4-b5097664342a/4f2a0fbc358a73e31d8e28898fcd2c06.png',
  siteUrl: 'https://www.oliveiralandscaping.com',
  google: {
    rating: '5.0',
    reviewCount: 45,
    reviewUrl: 'https://g.page/r/CTxbJdscXwI2EAE/review',
    // Optional: free auto-updating Google reviews via Featurable (https://featurable.com).
    // Create a free widget, paste its ID here, and the live feed turns on automatically.
    featurableWidgetId: 'featurable-061ca401-fc8a-49aa-bc1a-1bf1e73488c8',
  },
  social: {
    instagram: 'https://www.instagram.com/oliveiralandscapingc/',
    facebook: '',
  },
};

export const NAV_LINKS = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/#services' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Service Areas', to: '/service-areas' },
  { name: 'Contact', to: '/contact' },
];

export const SERVICE_AREAS = [
  {
    group: 'Core South Shore',
    blurb:
      'Coastal and near-coastal communities where premium curb appeal and durable hardscape matter most.',
    towns: [
      'Quincy', 'Braintree', 'Weymouth', 'Hingham', 'Cohasset',
      'Scituate', 'Norwell', 'Marshfield', 'Duxbury', 'Hull', 'Holbrook',
    ],
  },
  {
    group: 'Inland & Bridgewater Area',
    blurb:
      'Our home base and the surrounding towns — fast response times and full-service crews close to you.',
    towns: [
      'Bridgewater', 'West Bridgewater', 'East Bridgewater', 'Brockton',
      'Whitman', 'Hanson', 'Abington', 'Rockland', 'Pembroke', 'Hanover', 'Randolph',
    ],
  },
  {
    group: 'Plymouth Area',
    blurb:
      'Historic Plymouth and its neighbors, from established estates to new-construction landscapes.',
    towns: ['Plymouth', 'Kingston', 'Plympton', 'Carver', 'Halifax'],
  },
];

export const ALL_TOWNS = SERVICE_AREAS.flatMap((g) => g.towns);

export const SERVICES = [
  {
    slug: 'landscaping',
    icon: 'Leaf',
    title: 'Landscaping & Lawn Care',
    intro: 'Healthy, beautiful grounds that look their best in every season.',
    items: [
      'Lawn maintenance & mowing programs',
      'Spring & fall clean-ups',
      'Mulching & sod installation',
      'Seasonal flower beds & plantings',
      'Shrub trimming & bed edging',
      'Power washing',
    ],
  },
  {
    slug: 'hardscape',
    icon: 'Hammer',
    title: 'Hardscape & Masonry',
    intro: 'Durable, elegant stonework engineered to last for decades.',
    items: [
      'Paver patios & walkways',
      'Retaining walls & natural stone walls',
      'Outdoor stairs & granite steps',
      'Driveway paving & crushed stone',
      'Boulder & fieldstone accents',
      'Foundation & grading services',
    ],
  },
  {
    slug: 'patios',
    icon: 'LayoutGrid',
    title: 'Patios & Outdoor Living',
    intro: 'Custom-built spaces designed for how you actually live outdoors.',
    items: [
      'Poured concrete patios',
      'Paver & natural stone patios',
      'Walkway & entry design',
      'Outdoor seating & lounge areas',
      'Site grading & drainage',
      'Full backyard transformations',
    ],
  },
];

export const WHY_CHOOSE = [
  { icon: 'ShieldCheck', text: 'Licensed & Insured' },
  { icon: 'Layers', text: 'Full-Service Solutions' },
  { icon: 'Truck', text: 'Fully Equipped Crews' },
  { icon: 'ClipboardList', text: 'Free Detailed Estimates' },
  { icon: 'CalendarCheck', text: 'Reliable Scheduling' },
  { icon: 'Award', text: '16+ Years of Experience' },
  { icon: 'Star', text: 'Satisfaction Guaranteed' },
  { icon: 'Home', text: 'Family-Owned & Operated' },
];

export const TESTIMONIALS = [
  {
    name: 'Kenson Calixte',
    text: 'Great job. Great attention to detail. Job well done at a reasonable price. Highly recommended for landscaping.',
    rating: 5,
  },
  {
    name: 'John Nobre',
    text: 'Excellent service! They were professional, punctual, and the results exceeded my expectations. My yard looks amazing now!',
    rating: 5,
  },
  {
    name: 'Elizabeth Burnham',
    text: 'I couldn’t be happier with the results, and I’ve never seen harder workers. I would highly recommend Oliveira Landscaping.',
    rating: 5,
  },
  {
    name: 'Wendy Happel',
    text: 'José is the hardest-working owner I have ever met. He has a great eye, is very talented, and I’m completely satisfied.',
    rating: 5,
  },
  {
    name: 'DeAnn Baptista',
    text: 'Jose did a fantastic job building a rock wall and cleaning everything up. He also beat four other landscapers on pricing!',
    rating: 5,
  },
];

export const STATS = [
  { value: 16, suffix: '+', label: 'Years of Experience' },
  { value: 1500, suffix: '+', label: 'Projects Completed' },
  { value: 30, suffix: '+', label: 'South Shore Towns Served' },
  { value: 45, suffix: '', label: '5-Star Google Reviews' },
];

// Best 5 images used in the auto-rotating About carousel.
export const ABOUT_GALLERY = [
  { src: '/images/projects/mulch-driveway-estate/mulch-driveway-estate-04.jpg', alt: 'Dramatic red-mulch curb-appeal transformation by Oliveira Landscaping' },
  { src: '/images/projects/paver-walkway/paver-walkway-03.jpg', alt: 'Paver walkway and natural stone retaining wall built by Oliveira Landscaping' },
  { src: '/images/projects/concrete-patio/concrete-patio-02.jpg', alt: 'Backyard concrete patio and outdoor living space at golden hour' },
  { src: '/images/projects/mulch-driveway-estate/mulch-driveway-estate-05.jpg', alt: 'Boulder accents and sculpted shrubs in fresh red mulch' },
  { src: '/images/projects/lawn-care/lawn-care-01.jpg', alt: 'Lush, healthy lawn with a paver walkway at a classic South Shore home' },
];
