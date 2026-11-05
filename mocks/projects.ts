export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  location: string;
  year: string;
  client: string;
  summary: string;
  image: string;
}

export const projectCategories: string[] = [
  'All Projects',
  'Power Generation',
  'Fire Safety',
  'Engineering Services',
  'Warehousing & Inventory Management',
];

export const projects: ProjectItem[] = [
  {
    id: 'industrial-power-backup',
    name: 'Industrial Power Backup Installation',
    category: 'Power Generation',
    location: 'Lagos, Nigeria',
    year: '2025',
    client: 'Leading Manufacturing Group',
    summary:
      'Turnkey standby power system designed and installed to protect a high-demand production line from costly outages.',
    image: 'https://public.readdy.ai/ai/img_res/edited_a4bd7bfbf60882d86e9983175360321d_3ee203bc.jpg',
  },
  {
    id: 'commercial-fire-upgrade',
    name: 'Commercial Fire Safety Upgrade',
    category: 'Fire Safety',
    location: 'Port Harcourt, Nigeria',
    year: '2025',
    client: 'Commercial Property Portfolio',
    summary:
      'Full fire detection and suppression upgrade bringing a multi-floor commercial complex up to recognised safety standards.',
    image: 'https://public.readdy.ai/ai/img_res/edited_c14a3768acae828d157d7af04dfed1a7_cfa5ef14.jpg',
  },
  {
    id: 'manufacturing-technical-support',
    name: 'Manufacturing Plant Technical Support',
    category: 'Engineering Services',
    location: 'Abuja, Nigeria',
    year: '2024',
    client: 'Industrial Processing Facility',
    summary:
      'Ongoing engineering and planned maintenance programme that keeps critical production equipment running reliably.',
    image: 'https://public.readdy.ai/ai/img_res/edited_d5ab0719d0088ceb6b69cd8f214d66d7_851717fd.jpg',
  },
  {
    id: 'banking-standby-generators',
    name: 'Standby Generator System for Banking Group',
    category: 'Power Generation',
    location: 'Ibadan, Nigeria',
    year: '2025',
    client: 'National Banking Group',
    summary:
      'Multi-unit generator installation for branch and data operations, sized to protect transactions around the clock.',
    image: 'https://public.readdy.ai/ai/img_res/edited_62a4dc92ca821a0f1eeab01982a6028f_a092637c.jpg',
  },
  {
    id: 'hospital-fire-suppression',
    name: 'Hospital Fire Suppression System',
    category: 'Fire Safety',
    location: 'Enugu, Nigeria',
    year: '2024',
    client: 'Regional Teaching Hospital',
    summary:
      'Detection and suppression installation across critical care areas, delivered with minimal disruption to patients.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_cab265869bcea43854387a7e277b5e5a_28f1827e.jpg',
  },
  {
    id: 'nationwide-parts-distribution',
    name: 'Nationwide Spare Parts Distribution Programme',
    category: 'Warehousing & Inventory Management',
    location: 'Nationwide, Nigeria',
    year: '2025',
    client: 'Multi-Site Industrial Client',
    summary:
      'Managed sourcing, warehousing and delivery of genuine spares to sites across several states without project delays.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_7f894a1fdae58da89345d82692dfe793_e99d9c22.jpg',
  },
  {
    id: 'industrial-electrical-retrofit',
    name: 'Industrial Electrical Retrofit',
    category: 'Engineering Services',
    location: 'Kano, Nigeria',
    year: '2024',
    client: 'Heavy Manufacturing Plant',
    summary:
      'Switchgear and distribution upgrade executed during planned shutdowns, modernising ageing plant infrastructure.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_facd16c7d207b90232361825369f2406_72586965.jpg',
  },
  {
    id: 'retail-chain-power-safety',
    name: 'Retail Chain Power & Safety Package',
    category: 'Power Generation',
    location: 'Multiple States, Nigeria',
    year: '2025',
    client: 'National Retail Chain',
    summary:
      'Rolled-out backup power and fire safety provision across a retail estate, standardised for consistent compliance.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_57ab989bf525a1d10e1ec7d72333947a_df4a738a.jpg',
  },
  {
    id: 'government-facility-engineering',
    name: 'Government Facility Engineering Works',
    category: 'Engineering Services',
    location: 'Abuja, Nigeria',
    year: '2023',
    client: 'Public Sector Institution',
    summary:
      'Multidisciplinary engineering works delivered to specification, schedule and public-sector compliance requirements.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_e98b1d59670e122f13937024c750ea88_1e740ee4.jpg',
  },
];

export interface ProjectStat {
  value: number;
  suffix: string;
  label: string;
}

export const projectStats: ProjectStat[] = [
  { value: 500, suffix: '+', label: 'Projects delivered nationwide' },
  { value: 12, suffix: '+', label: 'States served' },
  { value: 8, suffix: '', label: 'Sectors supported' },
  { value: 24, suffix: '/7', label: 'After-sales support' },
];

export interface CaseStudyOutcome {
  icon: string;
  title: string;
  text: string;
}

export interface FeaturedCaseStudy {
  name: string;
  client: string;
  sector: string;
  location: string;
  year: string;
  image: string;
  overview: string;
  scope: string[];
  outcomes: CaseStudyOutcome[];
}

export const featuredCaseStudy: FeaturedCaseStudy = {
  name: 'Industrial Power Backup Installation',
  client: 'Leading Manufacturing Group',
  sector: 'Manufacturing & Industrial',
  location: 'Lagos, Nigeria',
  year: '2025',
  image: 'https://public.readdy.ai/ai/img_res/edited_a4bd7bfbf60882d86e9983175360321d_3ee203bc.jpg',
  overview:
    'A large manufacturing group was losing production hours to grid instability. We scoped, supplied and installed a standby power system sized to the plant\u2019s true load, then wrapped it in a planned maintenance contract so it stays ready for years to come.',
  scope: [
    'Load assessment & generator sizing',
    'Turnkey installation & commissioning',
    'Fuel & control system integration',
    'Ongoing planned maintenance contract',
  ],
  outcomes: [
    {
      icon: 'ri-shield-check-line',
      title: 'Protected production',
      text: 'Standby capacity holds the line steady through grid interruptions and unstable supply.',
    },
    {
      icon: 'ri-flashlight-line',
      title: 'Right-sized system',
      text: 'Sized to the real load profile, avoiding both overspend and under-capacity.',
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Long-term support',
      text: 'Planned servicing and 24/7 response keep the system dependable, not just installed.',
    },
  ],
};

export interface ProjectOutcome {
  icon: string;
  title: string;
  text: string;
}

export const projectOutcomes: ProjectOutcome[] = [
  {
    icon: 'ri-check-double-line',
    title: 'Delivered to specification',
    text: 'Every project is scoped, engineered and commissioned against a clear, agreed specification.',
  },
  {
    icon: 'ri-shield-star-line',
    title: 'Safety-led execution',
    text: 'Work is planned and carried out with strict safety discipline and minimal disruption to operations.',
  },
  {
    icon: 'ri-file-list-3-line',
    title: 'Documented handover',
    text: 'Drawings, records and as-built documentation are handed over so nothing is left to guesswork.',
  },
  {
    icon: 'ri-refresh-line',
    title: 'Support beyond handover',
    text: 'Planned maintenance and responsive after-sales support continue long after the project ends.',
  },
];