export interface ServiceCatalogItem {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  image: string;
  tagline: string;
  description: string;
  features: string[];
}

export const serviceCatalog: ServiceCatalogItem[] = [
  {
    slug: 'power-generation',
    name: 'Power Generation & Generators',
    shortName: 'Power Generation',
    icon: 'ri-flashlight-line',
    image: 'https://static.readdy.ai/image/c6e5abfce77454c22db1d81a54ed6a5f/0ad9f4a3a131668f8afa38531b17ba21.webp',
    tagline: 'Reliable power, around the clock',
    description:
      'Sales, installation and round-the-clock servicing of generators and power systems for homes, businesses and industry — sized correctly and built to run when it matters most.',
    features: [
      'Generator sales, supply & sizing',
      'Turnkey installation & commissioning',
      'Preventive maintenance contracts',
      '24/7 emergency repair & support',
    ],
  },
  {
    slug: 'fire-safety',
    name: 'Fire Safety & Firefighting Solutions',
    shortName: 'Fire Safety',
    icon: 'ri-fire-line',
    image: 'https://static.readdy.ai/image/c6e5abfce77454c22db1d81a54ed6a5f/985b5c056cacca7938f2de9ae79da77c.webp',
    tagline: 'Protection you can count on',
    description:
      'Certified fire detection, suppression and firefighting systems designed to protect people, property and operations — assessed, installed and maintained to recognised standards.',
    features: [
      'Fire risk assessments & compliance audits',
      'Detection, alarm & warning systems',
      'Suppression & extinguishing systems',
      'Firefighting equipment supply & training',
    ],
  },
  {
    slug: 'engineering-services',
    name: 'Engineering & Technical Services',
    shortName: 'Engineering Services',
    icon: 'ri-tools-line',
    image: 'https://public.readdy.ai/ai/img_res/edited_1aaa0bed2b4220c1a738e35e055f0e90_62bcda6b.jpg',
    tagline: 'Expertise that keeps operations moving',
    description:
      'End-to-end engineering, installation and maintenance services supporting industries, institutions and infrastructure across Nigeria.',
    features: [
      'Electrical & mechanical engineering',
      'Industrial installation & retrofits',
      'Planned maintenance programmes',
      'Technical consultancy, design & documentation',
    ],
  },
  {
    slug: 'warehousing-logistics',
    name: 'Warehousing & Inventory Management',
    shortName: 'Warehousing',
    icon: 'ri-archive-line',
    image: 'https://public.readdy.ai/ai/img_res/edited_e08982db30716b5ab3c47154f51447eb_19425ee9.jpg',
    tagline: 'Storage, handled properly',
    description:
      'Secure warehousing and distribution support across Nigeria — inventory control, professional handling and dependable delivery that keep your stock safe and moving.',
    features: [
      'Secure & bonded storage space',
      'Inventory management & tracking',
      'Handling, palletising & dispatch',
      'Nationwide distribution support',
    ],
  },
  {
    slug: 'renewable-energy',
    name: 'Renewable Energy & Solar Solutions',
    shortName: 'Renewable Energy',
    icon: 'ri-sun-line',
    image: 'https://public.readdy.ai/ai/img_res/edited_05bacebfee14f8acbb098efaaf45a36b_2ad7ba70.jpg',
    tagline: 'Clean power that pays you back',
    description:
      'Solar, hybrid and battery-storage systems designed, installed and maintained for homes, businesses and industrial sites — cutting fuel costs while keeping power on.',
    features: [
      'Solar PV design & installation',
      'Hybrid solar & generator systems',
      'Battery storage & inverter supply',
      'Energy audits & system maintenance',
    ],
  },
  {
    slug: 'marine-boat-building',
    name: 'Marine & Boat Building',
    shortName: 'Marine & Boat Building',
    icon: 'ri-sailboat-line',
    image: 'https://public.readdy.ai/ai/img_res/edited_4be70b6898c8e78cb32dd4cf6f23b1cc_c4f22a18.jpg',
    tagline: 'Built to work on water',
    description:
      'Design, construction, refit and repair of workboats, patrol craft and marine vessels — backed by marine engineering support that keeps operators moving on Nigeria’s waterways.',
    features: [
      'Custom boat design & construction',
      'Vessel refit, repair & maintenance',
      'Marine engineering & outfitting',
      'Workboat supply for operators',
    ],
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export const deliveryProcess: ProcessStep[] = [
  {
    step: '01',
    title: 'Consultation & Site Survey',
    description:
      'We start by understanding your operation, then assess the site to define the right technical scope and requirements.',
    icon: 'ri-chat-1-line',
  },
  {
    step: '02',
    title: 'Design & Proposal',
    description:
      'Our engineers design a solution and prepare a clear proposal — the right specification, timeline and cost, with no surprises.',
    icon: 'ri-draft-line',
  },
  {
    step: '03',
    title: 'Professional Installation',
    description:
      'Certified technicians install and commission your solution, working to recognised standards and minimising disruption.',
    icon: 'ri-hammer-line',
  },
  {
    step: '04',
    title: 'Support & Maintenance',
    description:
      'After handover we stay with you — planned maintenance, genuine parts and responsive support keep everything running.',
    icon: 'ri-customer-service-2-line',
  },
];

export interface Industry {
  name: string;
  icon: string;
  image: string;
}

export const industries: Industry[] = [
  {
    name: 'Manufacturing & Industrial',
    icon: 'ri-building-2-line',
    image:
      'https://public.readdy.ai/ai/img_res/edited_c4c08f830b565764ad601587048dd0c6_114b83c5.jpg',
  },
  {
    name: 'Oil, Gas & Energy',
    icon: 'ri-gas-station-line',
    image:
      'https://readdy.ai/api/search-image?query=Realistic%20editorial%20photograph%20of%20an%20African%20oil%20and%20gas%20engineer%20in%20orange%20coveralls%20and%20safety%20helmet%20walking%20beside%20steel%20pipelines%20and%20storage%20tanks%20at%20a%20Nigerian%20refinery%20during%20golden%20hour%2C%20warm%20amber%20light%20on%20industrial%20metalwork%2C%20authentic%20documentary%20style%2C%20softly%20blurred%20horizon%2C%20no%20text%2C%20high%20detail&width=800&height=600&seq=industry-energy-02&orientation=landscape&nocache=true',
  },
  {
    name: 'Banking & Finance',
    icon: 'ri-bank-line',
    image:
      'https://readdy.ai/api/search-image?query=Realistic%20editorial%20photograph%20of%20a%20Nigerian%20bank%20branch%20interior%20with%20a%20smiling%20African%20bank%20teller%20assisting%20a%20customer%20at%20a%20polished%20counter%2C%20warm%20ceiling%20lighting%2C%20stone%20columns%20and%20clean%20modern%20fittings%2C%20muted%20beige%20and%20charcoal%20tones%2C%20candid%20natural%20moment%2C%20no%20text%2C%20high%20detail&width=800&height=600&seq=industry-banking-03&orientation=landscape&nocache=true',
  },
  {
    name: 'Healthcare & Hospitals',
    icon: 'ri-heart-pulse-line',
    image:
      'https://readdy.ai/api/search-image?query=Realistic%20editorial%20photograph%20of%20two%20African%20nurses%20in%20scrubs%20talking%20with%20a%20doctor%20in%20a%20bright%20modern%20Nigerian%20hospital%20corridor%2C%20clean%20white%20walls%2C%20soft%20daylight%20and%20gentle%20warm%20accents%2C%20calm%20clinical%20atmosphere%2C%20authentic%20candid%20moment%2C%20no%20text%2C%20high%20detail&width=800&height=600&seq=industry-healthcare-04&orientation=landscape&nocache=true',
  },
  {
    name: 'Government & Public Sector',
    icon: 'ri-government-line',
    image:
      'https://readdy.ai/api/search-image?query=Realistic%20editorial%20photograph%20of%20a%20stately%20Nigerian%20government%20administrative%20building%20with%20stone%20facade%20and%20columns%2C%20a%20few%20African%20officials%20in%20formal%20attire%20walking%20along%20the%20landscaped%20approach%2C%20soft%20morning%20light%2C%20muted%20neutral%20tones%2C%20documentary%20style%2C%20no%20text%2C%20high%20detail&width=800&height=600&seq=industry-government-05&orientation=landscape&nocache=true',
  },
  {
    name: 'Retail & Commercial',
    icon: 'ri-store-2-line',
    image:
      'https://readdy.ai/api/search-image?query=Realistic%20editorial%20photograph%20of%20a%20modern%20Nigerian%20retail%20store%20interior%20with%20African%20shop%20staff%20arranging%20products%20on%20warm%20wooden%20shelving%20under%20soft%20spotlights%2C%20neatly%20stocked%20shelves%2C%20muted%20warm%20tones%2C%20authentic%20candid%20moment%2C%20no%20text%2C%20high%20detail&width=800&height=600&seq=industry-retail-06&orientation=landscape&nocache=true',
  },
  {
    name: 'Hospitality & Leisure',
    icon: 'ri-hotel-line',
    image:
      'https://readdy.ai/api/search-image?query=Realistic%20editorial%20photograph%20of%20an%20elegant%20Nigerian%20hotel%20lobby%20with%20African%20guests%20and%20a%20smiling%20concierge%20in%20uniform%2C%20warm%20ambient%20lamps%2C%20textured%20stone%20walls%20and%20comfortable%20lounge%20seating%2C%20inviting%20evening%20light%2C%20muted%20caramel%20and%20charcoal%20tones%2C%20no%20text%2C%20high%20detail&width=800&height=600&seq=industry-hospitality-07&orientation=landscape&nocache=true',
  },
  {
    name: 'Education & Institutions',
    icon: 'ri-graduation-cap-line',
    image:
      'https://readdy.ai/api/search-image?query=Realistic%20editorial%20photograph%20of%20African%20university%20students%20in%20casual%20clothing%20walking%20and%20chatting%20along%20a%20tree%20lined%20walkway%20beside%20a%20brick%20campus%20building%20in%20Nigeria%2C%20warm%20late%20afternoon%20light%2C%20muted%20green%20and%20sand%20tones%2C%20documentary%20style%2C%20no%20text%2C%20high%20detail&width=800&height=600&seq=industry-education-08&orientation=landscape&nocache=true',
  },
];

export interface ServiceFaq {
  question: string;
  answer: string;
}

export const serviceFaqs: ServiceFaq[] = [
  {
    question: 'Which regions of Nigeria do you cover?',
    answer:
      'We serve businesses and institutions across multiple states nationwide, supported by a responsive sales, installation and after-sales support network.',
  },
  {
    question: 'Do you offer maintenance after installation?',
    answer:
      'Yes. We offer planned preventive maintenance and responsive after-sales support so your equipment keeps performing long after handover.',
  },
  {
    question: 'Are your fire safety systems certified?',
    answer:
      'Our fire detection and suppression solutions are designed and installed to recognised fire safety standards, with compliance audits and documentation provided.',
  },
  {
    question: 'Can you supply generators and spare parts directly?',
    answer:
      'We supply genuine generators, equipment and spare parts through our distribution network and authorised brand partnerships.',
  },
  {
    question: 'How quickly can you respond to an emergency?',
    answer:
      'We operate 24/7 service and maintenance support, with regional teams positioned to respond quickly to urgent breakdowns.',
  },
  {
    question: 'Do you work with both private and public sector clients?',
    answer:
      'Yes. We partner with corporate, industrial and institutional clients across the private and public sectors.',
  },
];