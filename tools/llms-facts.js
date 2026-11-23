// Plain-language business facts for llms.txt / llms-full.txt (read by AI
// assistants and answer engines). Keep in sync with src/data/site.js.
import { SERVICE_PAGES } from '../src/data/services.js';
import { TOWNS } from '../src/data/towns.js';

const SITE = 'https://www.oliveiracorporation.com';

export const BUSINESS_FACTS = [
  '## Key facts',
  '- Business name: Oliveira Landscaping (also known as Oliveira Landscaping Construction)',
  '- Type: Family-owned, owner-operated landscaping, hardscape and outdoor construction company',
  '- Address: 50 Whitman Street, Bridgewater, MA 02324, United States',
  '- Phone / text: (774) 297-3349',
  '- Email: oliveiracorporation2016@gmail.com',
  `- Website: ${SITE}`,
  '- Hours: Monday–Saturday, 7:00 AM – 6:00 PM',
  '- Experience: 16+ years, 1,500+ completed projects',
  '- Licensed and insured; free, detailed written estimates',
  '- Driveways: brick and paver only. Does NOT install, pave, repair or seal asphalt driveways.',
  "- Google rating: 5.0 stars (45+ reviews)",
  "- Region: Boston's South Shore, Massachusetts (Norfolk and Plymouth counties)",
  '',
  '## Services',
  ...SERVICE_PAGES.map((s) => `- ${s.name}: ${SITE}/services/${s.slug}`),
  '',
  '## Towns served',
  TOWNS.map((t) => `${t.name}, MA`).join('; '),
].join('\n');
