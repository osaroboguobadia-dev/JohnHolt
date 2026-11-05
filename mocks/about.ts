export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export const aboutValues: CoreValue[] = [
  {
    title: 'Integrity',
    description: 'We conduct every engagement with honesty and transparency, earning trust that lasts across generations.',
    icon: 'ri-hand-heart-line',
  },
  {
    title: 'Technical Excellence',
    description: 'Certified engineers and rigorous standards ensure every solution performs exactly as promised.',
    icon: 'ri-award-line',
  },
  {
    title: 'Reliability',
    description: 'From installation to after-sales support, clients count on us to be there when it matters most.',
    icon: 'ri-shield-check-line',
  },
  {
    title: 'Safety First',
    description: 'The wellbeing of people and property guides every decision, on every project, without compromise.',
    icon: 'ri-fire-line',
  },
];

export interface Pillar {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const aboutPillars: Pillar[] = [
  {
    title: 'Our Mission',
    description: 'To power progress across Nigeria by delivering dependable, safe and technically excellent power, fire safety and engineering solutions.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_61d0651785af543a7c64a0e399cc5a26_fd707a9b.jpg',
    imageAlt: 'Red and gold compass emblem representing the John Holt mission',
  },
  {
    title: 'Our Vision',
    description: 'To remain Nigeria\u2019s most trusted industrial solutions group, setting the benchmark for quality and long-term partnership.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_c6e1946b96624ac3e835192fdaf58787_64d678e4.jpg',
    imageAlt: 'Red and gold eye emblem representing the John Holt vision',
  },
  {
    title: 'Our Promise',
    description: 'Real expertise, measurable reliability and genuine care for every client we serve \u2014 project after project.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_6cc0941b121996195db9c31da78be5de_7ed18570.jpg',
    imageAlt: 'Red and gold handshake emblem representing the John Holt promise',
  },
];

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const aboutMilestones: Milestone[] = [
  {
    year: '1861',
    title: 'A Trading Legacy Begins',
    description: 'The John Holt name is established in international trade, laying the foundation of a business built on trust.',
  },
  {
    year: '1900s',
    title: 'Rooted in West Africa',
    description: 'A strong presence is built across West Africa, with distribution and trading networks spanning the region.',
  },
  {
    year: '1961',
    title: 'Incorporated in Nigeria',
    description: 'John Holt PLC takes firm root in Nigeria, growing alongside the nation through its formative years.',
  },
  {
    year: '1990s',
    title: 'Into Engineering & Power',
    description: 'The group expands into power generation, engineering and technical services for industry and institutions.',
  },
  {
    year: '2010s',
    title: 'Nationwide Service Network',
    description: 'Dedicated sales, installation and after-sales support reach businesses across multiple states.',
  },
  {
    year: 'Today',
    title: 'Powering Modern Nigeria',
    description: 'A diversified group delivering integrated power, fire safety, engineering and distribution solutions.',
  },
];

export interface Leader {
  name: string;
  role: string;
  image: string;
  imageFit?: 'contain' | 'cover';
}

export const aboutLeadership: Leader[] = [
  {
    name: 'Chief Christopher Ikechi Eze (MFR)',
    role: 'Group Chairman',
    image: 'https://storage.helloreaddy.io/project_files/54536350-4396-4985-8dc6-ce5479c96ea1/2093a1f4-3164-465e-bc0e-22fc5a89aed6_compressed_dr_ezeh-2.webp',
  },
  {
    name: 'Dr. Christopher Ifesonachi Eze',
    role: 'Group Managing Director',
    image: 'https://storage.helloreaddy.io/project_files/54536350-4396-4985-8dc6-ce5479c96ea1/edcc9e03-b7df-4069-a8d4-289e426619f7_compressed_Chris.webp',
  },
  {
    name: 'Dr. Adeche Boyi Okeje',
    role: 'Financial Director',
    image: 'https://storage.helloreaddy.io/project_files/54536350-4396-4985-8dc6-ce5479c96ea1/f0b34ce5-833a-45db-9b9f-0a62e22353e8_compressed_AOB-SIZE-20-scaled.webp',
  },
  {
    name: 'Mr. Adimabua Renwick Jibunoh',
    role: 'Non Executive Director',
    image: 'https://storage.helloreaddy.io/project_files/54536350-4396-4985-8dc6-ce5479c96ea1/782e161a-8c6a-4430-91f4-6a5f7adaf465_compressed_mr_adim-1.webp',
  },
];

export interface Credential {
  label: string;
  icon: string;
}

export const aboutCredentials: Credential[] = [
  { label: 'Certified Engineering Teams', icon: 'ri-award-line' },
  { label: 'Nationwide Service Coverage', icon: 'ri-map-pin-2-line' },
  { label: 'Genuine Equipment & Brands', icon: 'ri-verified-badge-line' },
  { label: '24/7 Maintenance Support', icon: 'ri-customer-service-2-line' },
];