export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 125, suffix: '+', label: 'Years of heritage, tracing back to 1897' },
  { value: 500, suffix: '+', label: 'Projects delivered across the globe' },
  { value: 24, suffix: '/7', label: 'Round-the-clock service & support' },
  { value: 20, suffix: '+', label: 'Countries & regions served' },
];

export interface Division {
  name: string;
  slug: string;
  summary: string;
  icon: string;
  image: string;
}

export const divisions: Division[] = [
  {
    name: 'Power Generation & Generators',
    slug: 'power-generation',
    summary: 'Sales, installation, and round-the-clock servicing of generators and power systems for homes, businesses and industry.',
    icon: 'ri-flashlight-line',
    image: 'https://static.readdy.ai/image/c6e5abfce77454c22db1d81a54ed6a5f/0ad9f4a3a131668f8afa38531b17ba21.webp',
  },
  {
    name: 'Fire Safety & Firefighting Solutions',
    slug: 'fire-safety',
    summary: 'Certified fire detection, suppression and firefighting systems designed to protect people, property and operations.',
    icon: 'ri-fire-line',
    image: 'https://static.readdy.ai/image/c6e5abfce77454c22db1d81a54ed6a5f/985b5c056cacca7938f2de9ae79da77c.webp',
  },
  {
    name: 'Engineering & Technical Services',
    slug: 'engineering-services',
    summary: 'End-to-end engineering, installation and maintenance services supporting industries, institutions and infrastructure.',
    icon: 'ri-tools-line',
    image: 'https://public.readdy.ai/ai/img_res/edited_1aaa0bed2b4220c1a738e35e055f0e90_62bcda6b.jpg',
  },
  {
    name: 'Marine & Boat Building',
    slug: 'marine-boat-building',
    summary: 'Construction, refit and repair of workboats, patrol craft and marine vessels for operators on Nigerian waterways.',
    icon: 'ri-sailboat-line',
    image: 'https://public.readdy.ai/ai/img_res/edited_eef94c53cab6208d22d5578465fadebb_4c7e3144.jpg',
  },
  {
    name: 'Renewable Energy & Solar',
    slug: 'renewable-energy',
    summary: 'Solar, hybrid and battery-storage systems designed to cut fuel costs and keep power on.',
    icon: 'ri-sun-line',
    image: 'https://public.readdy.ai/ai/img_res/edited_2e0ad500f54225a6d5eb066c3669a741_3d2e9d3c.jpg',
  },
  {
    name: 'Warehousing & Inventory Management',
    slug: 'warehousing-logistics',
    summary: 'Secure storage, inventory control and dependable distribution that keep your stock moving.',
    icon: 'ri-archive-line',
    image: 'https://public.readdy.ai/ai/img_res/edited_e57adabbf93153cfe2c092961f4aa4e9_10a52941.jpg',
  },
];

export interface Project {
  name: string;
  category: string;
  location: string;
  image: string;
}

export const featuredProjects: Project[] = [
  {
    name: 'Industrial Power Backup Installation',
    category: 'Power Generation',
    location: 'Lagos, Nigeria',
    image: 'https://public.readdy.ai/ai/img_res/edited_17a2f2c42ec68234313ff1dd40a142e6_6a929e4c.jpg',
  },
  {
    name: 'Commercial Fire Safety Upgrade',
    category: 'Fire Safety',
    location: 'Port Harcourt, Nigeria',
    image: 'https://public.readdy.ai/ai/img_res/edited_da5be445efc75136294b0a9299642484_7d8dbb43.jpg',
  },
  {
    name: 'Manufacturing Plant Technical Support',
    category: 'Engineering Services',
    location: 'Abuja, Nigeria',
    image: 'https://public.readdy.ai/ai/img_res/edited_d2f2777a4b62d981253545230003d597_52416c42.jpg',
  },
];

export interface Reason {
  title: string;
  description: string;
  icon: string;
}

export const reasons: Reason[] = [
  {
    title: 'Generations of Proven Heritage',
    description: 'Rooted in Nigeria since 1897, trusted by businesses, institutions and industries around the world.',
    icon: 'ri-award-line',
  },
  {
    title: 'Certified Technical Expertise',
    description: 'Qualified engineers and technicians delivering solutions that meet international standards.',
    icon: 'ri-shield-check-line',
  },
  {
    title: 'Global Service Network',
    description: 'Responsive sales, installation and after-sales support across regions, markets and time zones.',
    icon: 'ri-map-pin-line',
  },
  {
    title: 'End-to-End Reliability',
    description: 'From consultation to installation and maintenance, we stand behind every solution we deliver.',
    icon: 'ri-customer-service-2-line',
  },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Adaeze Okafor',
    role: 'Facilities Manager',
    company: 'Lagos Business Complex',
    quote: 'John Holt PLC installed our backup power system and the service since has been outstanding — responsive, professional and reliable.',
    avatar: 'https://public.readdy.ai/ai/img_res/edited_73dd127eda673b8e193c3c59a22673df_cbef4e39.jpg',
  },
  {
    name: 'Chuka Nwosu',
    role: 'Operations Director',
    company: 'Industrial Group Nigeria',
    quote: 'Their engineering team understood our technical requirements immediately and delivered a solution that has run flawlessly.',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20a%20confident%20Nigerian%20businessman%20in%20a%20suit%2C%20studio%20lighting%2C%20neutral%20warm%20background&width=200&height=200&seq=jh-avatar-02&orientation=squarish',
  },
  {
    name: 'Funmilayo Bakare',
    role: 'Compliance Lead',
    company: 'Retail Holdings',
    quote: 'The fire safety audit and installation gave our leadership real peace of mind. Thorough, certified, and well documented.',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20a%20confident%20Nigerian%20businesswoman%2C%20studio%20lighting%2C%20neutral%20warm%20background&width=200&height=200&seq=jh-avatar-03&orientation=squarish',
  },
];

export interface NewsItem {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

export const newsItems: NewsItem[] = [
  {
    title: 'John Holt PLC Expands Generator Service Network',
    slug: 'generator-service-network-expansion',
    date: '2026-08-12',
    category: 'Company News',
    excerpt: 'New regional service hubs aim to deliver faster response times for maintenance and emergency repairs.',
    image: 'https://public.readdy.ai/ai/img_res/edited_4cbd3a9db88b48058083db60b638851b_b3b330d2.jpg',
  },
  {
    title: 'Understanding Fire Safety Compliance for Nigerian Businesses',
    slug: 'fire-safety-compliance-guide',
    date: '2026-07-02',
    category: 'Insights',
    excerpt: 'A practical overview of fire safety standards every facility manager should know.',
    image: 'https://public.readdy.ai/ai/img_res/edited_0e410a227e7c49c8fbffdef56d50ba03_922dbaed.jpg',
  },
  {
    title: 'Powering Industry: Choosing the Right Generator Capacity',
    slug: 'choosing-generator-capacity',
    date: '2026-05-21',
    category: 'Insights',
    excerpt: 'Key factors to consider when sizing power backup systems for commercial and industrial use.',
    image: 'https://public.readdy.ai/ai/img_res/edited_9bee7322e6eaea9a01c0a86796f36ad4_024f6a31.jpg',
  },
];

export const clientLogos: string[] = [];

export interface Certification {
  standard: string;
  standardTitle: string;
  certificateTitle: string;
  organisation: string;
  address: string;
  certificateNumber: string;
  issuedBy: string;
  surveillanceDate: string;
  expiryDate: string;
  scopeSummary: string;
  iafCodes: string[];
  fileUrl: string;
  verifyUrl: string;
}

export const certification: Certification = {
  standard: 'ISO 9001:2015',
  standardTitle: 'Quality Management System',
  certificateTitle: 'Certificate of Surveillance',
  organisation: 'John Holt PLC',
  address: 'Plot 11b, Ilabere Avenue, Ikoyi, Lagos, Nigeria',
  certificateNumber: 'SCK/01/JHP/25/23/5268',
  issuedBy: 'SCK Certifications',
  surveillanceDate: '12 October 2026',
  expiryDate: '12 June 2028',
  scopeSummary:
    'Sale, installation and maintenance of diesel and gas generators, renewable energy power solutions, air conditioning and cooling systems, fire & safety equipment, property sales, facility management, equipment rentals and general construction.',
  iafCodes: ['18', '19', '28', '29', '35'],
  fileUrl:
    'https://storage.helloreaddy.io/project_files/54536350-4396-4985-8dc6-ce5479c96ea1/9b711015-b276-4408-8deb-10ad6f240b82_JOHN-HOLT-PLC----ISO-9001-SURVEILLANCE-AUDIT-CERTIFICATE.pdf',
  verifyUrl: 'https://www.sckcerts.com',
};