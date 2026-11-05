export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  authorRole: string;
  readTime: string;
  excerpt: string;
  image: string;
  tags: string[];
}

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'list'; items: string[] };

export const articleCategories: string[] = [
  'All',
  'Company News',
  'Insights',
  'Projects',
  'Safety',
];

export const articles: Article[] = [
  {
    slug: 'generator-service-network-expansion',
    title: 'John Holt PLC Expands Generator Service Network',
    category: 'Company News',
    date: '2026-08-12',
    author: 'Corporate Communications',
    authorRole: 'John Holt PLC',
    readTime: '4 min read',
    excerpt:
      'New regional service hubs aim to deliver faster response times for maintenance and emergency repairs.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_4cbd3a9db88b48058083db60b638851b_b3b330d2.jpg',
    tags: ['Power', 'Service', 'Network'],
  },
  {
    slug: 'fire-safety-compliance-guide',
    title: 'Understanding Fire Safety Compliance for Nigerian Businesses',
    category: 'Safety',
    date: '2026-07-02',
    author: 'Eng. Chidi Okonkwo',
    authorRole: 'Head of Fire Safety',
    readTime: '7 min read',
    excerpt:
      'A practical overview of fire safety standards every facility manager should know.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_0e410a227e7c49c8fbffdef56d50ba03_922dbaed.jpg',
    tags: ['Fire Safety', 'Compliance', 'Facilities'],
  },
  {
    slug: 'choosing-generator-capacity',
    title: 'Powering Industry: Choosing the Right Generator Capacity',
    category: 'Insights',
    date: '2026-05-21',
    author: 'Eng. Bola Adeyemi',
    authorRole: 'Lead Power Systems Engineer',
    readTime: '6 min read',
    excerpt:
      'Key factors to consider when sizing power backup systems for commercial and industrial use.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_9bee7322e6eaea9a01c0a86796f36ad4_024f6a31.jpg',
    tags: ['Power', 'Sizing', 'Industry'],
  },
  {
    slug: 'lagos-power-installation-completed',
    title: 'Industrial Power Backup Installation Completed in Lagos',
    category: 'Projects',
    date: '2026-04-18',
    author: 'Projects Team',
    authorRole: 'John Holt PLC',
    readTime: '5 min read',
    excerpt:
      'A manufacturing group can now run production through grid instability after a turnkey standby power installation.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_637a5b8140e7a938fe9037beeb4581d1_135778bd.jpg',
    tags: ['Projects', 'Power', 'Manufacturing'],
  },
  {
    slug: 'preventive-maintenance-uptime',
    title: 'Why Preventive Maintenance Protects Your Uptime and Your Budget',
    category: 'Insights',
    date: '2026-03-09',
    author: 'Eng. Bola Adeyemi',
    authorRole: 'Lead Power Systems Engineer',
    readTime: '6 min read',
    excerpt:
      'Reactive repairs cost more than planned servicing. Here is how a maintenance programme pays for itself.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_a41c3e9df6e05e9cf17bd60c0b4bc130_bcf9a914.jpg',
    tags: ['Maintenance', 'Industry', 'Reliability'],
  },
  {
    slug: 'john-holt-plc-partnership-announcement',
    title: 'John Holt PLC Announces New Equipment Distribution Partnership',
    category: 'Company News',
    date: '2026-02-15',
    author: 'Corporate Communications',
    authorRole: 'John Holt PLC',
    readTime: '3 min read',
    excerpt:
      'A new distribution agreement broadens access to verified equipment and genuine spare parts nationwide.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_5b7f7a999e91effa6c274b3a0d83287f_8c8ce245.jpg',
    tags: ['Company News', 'Distribution', 'Partners'],
  },
  {
    slug: 'fire-safety-hospital-case-study',
    title: 'Fire Suppression Delivered With Care at a Regional Hospital',
    category: 'Projects',
    date: '2026-01-22',
    author: 'Projects Team',
    authorRole: 'John Holt PLC',
    readTime: '5 min read',
    excerpt:
      'How our team installed detection and suppression systems across critical care areas without disrupting patients.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_35a1cbe7ba8e8348672042292ba2d02c_5f3d205a.jpg',
    tags: ['Projects', 'Fire Safety', 'Healthcare'],
  },
  {
    slug: 'sustainable-power-industrial-growth',
    title: 'Smarter Power Choices for Sustainable Industrial Growth',
    category: 'Insights',
    date: '2025-12-05',
    author: 'Eng. Chidi Okonkwo',
    authorRole: 'Head of Fire Safety',
    readTime: '7 min read',
    excerpt:
      'A look at how efficient power planning reduces cost and supports more responsible operations.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_4fc4df5f0cd9bcafed42bd6d77f2edcd_a5cbf211.jpg',
    tags: ['Power', 'Sustainability', 'Industry'],
  },
  {
    slug: 'engineering-skills-apprenticeship-programme',
    title: 'Investing in the Next Generation of Engineers',
    category: 'Company News',
    date: '2025-11-10',
    author: 'Corporate Communications',
    authorRole: 'John Holt PLC',
    readTime: '4 min read',
    excerpt:
      'Our apprenticeship programme trains young technicians in power, fire safety and engineering disciplines.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_b74b30b482bc03f50b378fd81cadfbcf_e32b4066.jpg',
    tags: ['Careers', 'Engineering', 'Training'],
  },
];

const genericBody: ArticleBlock[] = [
  {
    type: 'paragraph',
    text: 'At John Holt PLC, every engagement starts with understanding the real problem before proposing a solution. That principle shapes how we plan, deliver and support the work our clients depend on every day.',
  },
];

export const articleBodies: Record<string, ArticleBlock[]> = {
  'generator-service-network-expansion': [
    {
      type: 'paragraph',
      text: 'Reliable power only feels reliable when support is close at hand. That is the thinking behind the expansion of our generator service network, which adds new regional service hubs designed to shorten response times for both planned maintenance and emergency call-outs.',
    },
    { type: 'heading', text: 'Closer support, faster response' },
    {
      type: 'paragraph',
      text: 'By positioning engineers and genuine spare parts closer to where our clients operate, we reduce the downtime that so often follows an unexpected fault. The new hubs are staffed by trained technicians and stocked with the consumables that keep standby systems ready.',
    },
    {
      type: 'list',
      items: [
        'Regional service hubs positioned near major industrial clusters',
        'Faster emergency response for critical standby systems',
        'Genuine parts on hand to reduce repair delays',
        'Standardised servicing procedures across every location',
      ],
    },
    { type: 'heading', text: 'Built around uptime' },
    {
      type: 'paragraph',
      text: 'For businesses that cannot afford to be offline, responsive service is not a luxury — it is the difference between a minor interruption and a costly shutdown. This expansion is part of our long-term commitment to keeping clients powered, protected and operating.',
    },
    {
      type: 'quote',
      text: 'The value of a power system is only realised when it works the moment you need it. Our job is to make sure that moment is never a gamble.',
      cite: 'Service Operations, John Holt PLC',
    },
  ],
  'fire-safety-compliance-guide': [
    {
      type: 'paragraph',
      text: 'Fire safety is one of those responsibilities that is easy to overlook until the day it matters most. For facility managers, staying compliant is not just a legal obligation — it is a duty of care to everyone who walks through the doors.',
    },
    { type: 'heading', text: 'Start with a risk assessment' },
    {
      type: 'paragraph',
      text: 'Every credible fire safety plan begins with understanding the specific risks of a building and how it is used. A warehouse, a hospital and an office tower each carry very different hazards, and a compliant system must be designed around them.',
    },
    {
      type: 'list',
      items: [
        'Identify ignition sources, fuel loads and occupancy patterns',
        'Map escape routes and confirm they remain clear and lit',
        'Verify detection, alarm and suppression coverage by risk level',
        'Schedule regular inspection, testing and documentation',
      ],
    },
    { type: 'heading', text: 'Detection, alarm and suppression' },
    {
      type: 'paragraph',
      text: 'A compliant system is layered. Early detection warns occupants, alarms prompt an orderly response, and suppression limits damage where it starts. Each layer should be selected for the environment it protects, not applied generically.',
    },
    { type: 'heading', text: 'Documentation and ongoing testing' },
    {
      type: 'paragraph',
      text: 'Compliance is continuous. Records of inspections, tests and maintenance demonstrate due diligence and highlight weaknesses before they become failures. A system that is installed and forgotten is a system you cannot trust.',
    },
    {
      type: 'quote',
      text: 'Compliance is not a certificate on a wall. It is a habit of checking that the systems protecting people still work.',
      cite: 'Eng. Chidi Okonkwo, Head of Fire Safety',
    },
  ],
  'choosing-generator-capacity': [
    {
      type: 'paragraph',
      text: 'Choosing a generator is rarely about picking the biggest number. It is about matching a system to the real load, the real site and the way a business actually operates. Over-size and you overspend; under-size and you invite the very failures you set out to prevent.',
    },
    { type: 'heading', text: 'Understand your true load profile' },
    {
      type: 'paragraph',
      text: 'The starting point is a proper load assessment. Peak demand, step loads from motors and compressors, and the sequence in which equipment starts all shape the capacity you need. A motor that surges on start-up can demand far more than its running rating suggests.',
    },
    {
      type: 'list',
      items: [
        'Measure running, starting and peak loads rather than guessing',
        'Account for future expansion before finalising capacity',
        'Consider fuel storage, siting, noise and ventilation',
        'Plan for automatic transfer and safe changeover',
      ],
    },
    { type: 'heading', text: 'The cost of getting it wrong' },
    {
      type: 'paragraph',
      text: 'An under-sized generator runs hot, wears faster and can fail exactly when the load is highest. An over-sized unit burns more fuel and costs more to maintain than necessary. Right-sizing is a technical decision with a direct commercial impact.',
    },
    { type: 'heading', text: 'Don\u2019t forget the support layer' },
    {
      type: 'paragraph',
      text: 'A generator is only as dependable as the service behind it. Planned maintenance, genuine parts and responsive support turn an installed machine into a system you can rely on for years.',
    },
  ],
  'lagos-power-installation-completed': [
    {
      type: 'paragraph',
      text: 'A large manufacturing group in Lagos was losing production hours to an unstable grid. Every outage rippled through the plant, from halted lines to missed delivery windows. They needed power that simply would not fail.',
    },
    { type: 'heading', text: 'Scoping the true requirement' },
    {
      type: 'paragraph',
      text: 'Our team began with a full load assessment, mapping peak demand and the start-up behaviour of heavy equipment. That analysis let us size a standby system to the plant\u2019s real profile rather than a rough estimate.',
    },
    {
      type: 'list',
      items: [
        'Load assessment and generator sizing',
        'Turnkey installation and commissioning',
        'Fuel and control system integration',
        'Ongoing planned maintenance contract',
      ],
    },
    { type: 'heading', text: 'Delivered and supported' },
    {
      type: 'paragraph',
      text: 'The system was installed, commissioned and documented, then wrapped in a planned maintenance programme so it stays ready. Production now continues through grid interruptions that previously brought the line to a halt.',
    },
    {
      type: 'quote',
      text: 'We no longer think about power. That is exactly the outcome we wanted.',
      cite: 'Operations Director, Manufacturing Group',
    },
  ],
  'preventive-maintenance-uptime': [
    {
      type: 'paragraph',
      text: 'When equipment fails unexpectedly, the cost is never just the repair. It is the halted line, the missed deadline, the emergency call-out and the premium paid for parts at short notice. Preventive maintenance exists to keep those costs from ever landing.',
    },
    { type: 'heading', text: 'The economics are simple' },
    {
      type: 'paragraph',
      text: 'Planned servicing is predictable. It is scheduled, budgeted and carried out on your terms. Reactive repair is the opposite — it arrives uninvited, usually at the worst possible moment, and nearly always costs more.',
    },
    {
      type: 'list',
      items: [
        'Scheduled inspections catch wear before it becomes failure',
        'Genuine parts and trained technicians extend equipment life',
        'Documented history supports better planning and budgeting',
        'Consistent upkeep protects resale and replacement value',
      ],
    },
    { type: 'heading', text: 'It is about more than the machine' },
    {
      type: 'paragraph',
      text: 'A reliable maintenance programme protects people too. Well-serviced equipment is safer equipment, and a culture of planned care reduces the risk of the faults that lead to accidents.',
    },
  ],
  'john-holt-plc-partnership-announcement': [
    {
      type: 'paragraph',
      text: 'Access to genuine equipment and verified spare parts is central to keeping businesses running. Our new distribution partnership widens that access, bringing quality equipment and dependable supply to more clients across Nigeria.',
    },
    { type: 'heading', text: 'What the partnership means for clients' },
    {
      type: 'paragraph',
      text: 'A broader distribution network means shorter lead times, more reliable availability and greater confidence that the parts in your equipment are the ones it was designed to use.',
    },
    {
      type: 'list',
      items: [
        'Wider availability of verified equipment and genuine parts',
        'Improved lead times across the country',
        'Consistent quality and authenticity standards',
        'Stronger after-sales support through a deeper supply chain',
      ],
    },
    {
      type: 'quote',
      text: 'Reliable supply is invisible when it works well and painful when it does not. This partnership is about making sure it works well.',
      cite: 'Distribution Division, John Holt PLC',
    },
  ],
  'fire-safety-hospital-case-study': [
    {
      type: 'paragraph',
      text: 'Hospitals present one of the most demanding fire safety environments there is. Patients cannot simply be evacuated at will, critical care equipment must keep running, and any disruption can carry real clinical risk.',
    },
    { type: 'heading', text: 'Designing around care, not against it' },
    {
      type: 'paragraph',
      text: 'Our team worked in phased, carefully scheduled windows so that installation never interrupted patient care. Detection and suppression were tailored to the specific risks of theatres, wards and equipment rooms.',
    },
    {
      type: 'list',
      items: [
        'Zone-by-zone design matched to clinical risk',
        'Installation scheduled around patient activity',
        'Commissioning verified area by area',
        'Clear documentation handed to facilities staff',
      ],
    },
    { type: 'heading', text: 'Safety that respects the environment' },
    {
      type: 'paragraph',
      text: 'The result is a system that protects the building and everyone in it while respecting the sensitive work that happens within. Rigorous, certified and delivered without a single day of disruption to care.',
    },
  ],
  'sustainable-power-industrial-growth': [
    {
      type: 'paragraph',
      text: 'Power is one of the largest operating costs for many industrial businesses — and one of the biggest opportunities for improvement. Smarter power planning reduces spend while supporting more responsible operations.',
    },
    { type: 'heading', text: 'Efficiency first' },
    {
      type: 'paragraph',
      text: 'Before adding capacity, it pays to understand where energy is actually going. Load audits reveal waste, inefficiency and opportunities to reduce demand through better equipment and control.',
    },
    {
      type: 'list',
      items: [
        'Audit loads to find waste and inefficiency',
        'Right-size systems to avoid over-generation',
        'Blend sources for resilience and lower cost',
        'Plan for maintenance to sustain efficiency over time',
      ],
    },
    { type: 'heading', text: 'Growth that lasts' },
    {
      type: 'paragraph',
      text: 'Sustainable growth is not only about environmental responsibility. Efficient power systems are more resilient, cheaper to run and better positioned to support expansion as a business scales.',
    },
  ],
  'engineering-skills-apprenticeship-programme': [
    {
      type: 'paragraph',
      text: 'Great engineering runs on skilled people. Our apprenticeship programme invests in the next generation of technicians, giving them hands-on training across power, fire safety and engineering disciplines.',
    },
    { type: 'heading', text: 'Learning by doing' },
    {
      type: 'paragraph',
      text: 'Apprentices work alongside experienced mentors on real projects, building practical competence from day one. Classroom theory is paired with supervised field experience so skills are grounded in reality.',
    },
    {
      type: 'list',
      items: [
        'Structured training across core technical disciplines',
        'Mentorship from experienced engineers',
        'Supervised hands-on project experience',
        'Clear pathways into long-term careers',
      ],
    },
    {
      type: 'quote',
      text: 'The best way to secure our future capability is to build it ourselves, one skilled technician at a time.',
      cite: 'Engineering Division, John Holt PLC',
    },
  ],
};

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticleBody(slug: string): ArticleBlock[] {
  return articleBodies[slug] || genericBody;
}

export function getRelatedArticles(slug: string, count = 3): Article[] {
  const current = getArticle(slug);
  if (!current) return articles.slice(0, count);
  const sameCategory = articles.filter((a) => a.slug !== slug && a.category === current.category);
  const others = articles.filter((a) => a.slug !== slug && a.category !== current.category);
  return [...sameCategory, ...others].slice(0, count);
}