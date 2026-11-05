export interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  posted: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export const careerDepartments: string[] = [
  'All Departments',
  'Engineering',
  'Power Systems',
  'Fire Safety',
  'Sales & Distribution',
  'Corporate & Support',
];

export const jobRoles: JobRole[] = [
  {
    id: 'senior-power-systems-engineer',
    title: 'Senior Power Systems Engineer',
    department: 'Power Systems',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    level: 'Senior',
    posted: '2026-09-28',
    summary:
      'Lead the design, sizing and commissioning of standby generator and power backup systems for commercial and industrial clients.',
    responsibilities: [
      'Produce load assessments and technical sizing for power systems',
      'Oversee installation, testing and commissioning on client sites',
      'Mentor junior engineers and technicians across projects',
      'Ensure all work meets relevant standards and client specifications',
    ],
    requirements: [
      'B.Eng / B.Sc in Electrical or Mechanical Engineering',
      '6+ years experience in power generation or electrical systems',
      'Strong knowledge of generators, switchgear and control systems',
      'COREN registration or equivalent is an advantage',
    ],
  },
  {
    id: 'field-service-technician',
    title: 'Field Service Technician',
    department: 'Power Systems',
    location: 'Port Harcourt, Nigeria',
    type: 'Full-time',
    level: 'Mid-level',
    posted: '2026-09-20',
    summary:
      'Carry out planned maintenance and emergency repairs on generators and power installations across the region.',
    responsibilities: [
      'Perform scheduled servicing and diagnostics on standby systems',
      'Respond to emergency breakdown call-outs within agreed timeframes',
      'Complete service reports and maintain accurate records',
      'Advise clients on correct operation and preventive care',
    ],
    requirements: [
      'OND / HND in Electrical or Mechanical Engineering',
      '3+ years hands-on experience with generators and power equipment',
      'Willingness to travel and work occasional on-call shifts',
      'Strong safety awareness and attention to detail',
    ],
  },
  {
    id: 'fire-safety-engineer',
    title: 'Fire Safety Engineer',
    department: 'Fire Safety',
    location: 'Abuja, Nigeria',
    type: 'Full-time',
    level: 'Mid-level',
    posted: '2026-09-15',
    summary:
      'Design and deliver fire detection and suppression systems that protect people, property and operations.',
    responsibilities: [
      'Conduct fire risk assessments and design compliant systems',
      'Supervise installation, testing and handover of fire safety works',
      'Prepare documentation, drawings and compliance records',
      'Train client teams on system operation and safety procedures',
    ],
    requirements: [
      'B.Eng / B.Sc in Engineering or related discipline',
      '4+ years experience in fire detection and suppression systems',
      'Familiarity with recognised fire safety codes and standards',
      'Excellent documentation and client-facing communication skills',
    ],
  },
  {
    id: 'engineering-project-manager',
    title: 'Engineering Project Manager',
    department: 'Engineering',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    level: 'Senior',
    posted: '2026-09-08',
    summary:
      'Own the delivery of multidisciplinary engineering projects from scope and schedule through to handover.',
    responsibilities: [
      'Plan project scope, budgets, timelines and resource allocation',
      'Coordinate engineering, procurement and site teams',
      'Manage client relationships and report project progress',
      'Ensure quality, safety and compliance throughout delivery',
    ],
    requirements: [
      'B.Eng plus project management certification (PMP or similar)',
      '7+ years managing technical or engineering projects',
      'Strong leadership, planning and stakeholder management skills',
      'Experience in power, fire safety or industrial sectors preferred',
    ],
  },
  {
    id: 'maintenance-planner',
    title: 'Maintenance Planner',
    department: 'Engineering',
    location: 'Kano, Nigeria',
    type: 'Full-time',
    level: 'Mid-level',
    posted: '2026-08-30',
    summary:
      'Build and coordinate planned maintenance schedules that keep client equipment running reliably.',
    responsibilities: [
      'Develop preventive maintenance plans and schedules',
      'Coordinate technician deployment and spare parts availability',
      'Track service history and equipment performance data',
      'Identify recurring faults and recommend improvements',
    ],
    requirements: [
      'HND / B.Sc in Engineering or a technical field',
      '3+ years in maintenance planning or asset management',
      'Comfortable with maintenance tracking and reporting tools',
      'Highly organised with strong attention to detail',
    ],
  },
  {
    id: 'technical-sales-executive',
    title: 'Technical Sales Executive',
    department: 'Sales & Distribution',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    level: 'Mid-level',
    posted: '2026-08-22',
    summary:
      'Grow our equipment and services business by building trusted relationships with commercial and industrial clients.',
    responsibilities: [
      'Identify new business opportunities and develop client pipelines',
      'Prepare quotations and technical proposals with engineering support',
      'Maintain strong relationships with existing accounts',
      'Meet sales targets and report on activity and forecasts',
    ],
    requirements: [
      'B.Sc / HND in Engineering, Business or related field',
      '3+ years in technical B2B sales, ideally in power or industrial sectors',
      'Strong negotiation and relationship-building skills',
      'Self-motivated with the ability to work independently',
    ],
  },
  {
    id: 'finance-analyst',
    title: 'Finance Analyst',
    department: 'Corporate & Support',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    level: 'Mid-level',
    posted: '2026-08-12',
    summary:
      'Support financial planning, reporting and analysis across our engineering and distribution businesses.',
    responsibilities: [
      'Prepare management reports, budgets and forecasts',
      'Analyse project costs and support commercial decisions',
      'Reconcile accounts and support month-end processes',
      'Identify efficiency opportunities across business units',
    ],
    requirements: [
      'B.Sc in Accounting, Finance or Economics',
      '3+ years in finance, analysis or audit roles',
      'Strong Excel and financial modelling skills',
      'Professional certification (ICAN, ACCA) is an advantage',
    ],
  },
];

export interface CareerBenefit {
  icon: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const careerBenefits: CareerBenefit[] = [
  {
    icon: 'ri-graduation-cap-line',
    title: 'Real Career Growth',
    description: 'Structured development, mentorship and genuine pathways to advance your technical or professional career.',
    image:
      'https://readdy.ai/api/search-image?query=Young%20Nigerian%20professionals%20in%20a%20bright%20training%20room%2C%20an%20older%20African%20mentor%20explaining%20a%20technical%20diagram%20on%20a%20whiteboard%2C%20engaged%20faces%2C%20natural%20window%20light%2C%20warm%20documentary%20style%20photography%2C%20authentic%20workplace%20setting&width=800&height=600&seq=career-benefit-growth-2026&orientation=landscape',
    imageAlt: 'Nigerian professionals in a mentorship training session',
  },
  {
    icon: 'ri-team-line',
    title: 'Collaborative Teams',
    description: 'Work alongside experienced engineers and specialists who share knowledge and support one another.',
    image:
      'https://public.readdy.ai/ai/img_res/edited_78c1be9d527e1e06213be9e305318a48_9ac2220e.jpg',
    imageAlt: 'African engineers in John Holt branded hard hats and hi-vis vests collaborating over technical drawings',
  },
  {
    icon: 'ri-shield-star-line',
    title: 'Safety First, Always',
    description: 'A working culture that puts safety, integrity and doing the job properly ahead of shortcuts.',
    image:
      'https://readdy.ai/api/search-image?query=Nigerian%20site%20supervisor%20in%20white%20safety%20helmet%20and%20reflective%20vest%20leading%20a%20toolbox%20briefing%20with%20a%20small%20crew%20on%20an%20industrial%20site%2C%20safety%20signage%20nearby%2C%20golden%20afternoon%20light%2C%20realistic%20documentary%20photography&width=800&height=600&seq=career-benefit-safety-2026&orientation=landscape',
    imageAlt: 'Nigerian site supervisor leading a safety briefing',
  },
  {
    icon: 'ri-trophy-line',
    title: 'Rewarding Work',
    description: 'Contribute to projects that power industry, protect people and keep businesses running nationwide.',
    image:
      'https://readdy.ai/api/search-image?query=Two%20African%20technicians%20commissioning%20a%20large%20industrial%20diesel%20generator%20inside%20a%20plant%20room%2C%20one%20holding%20a%20tablet%20while%20the%20other%20adjusts%20controls%2C%20clean%20industrial%20interior%2C%20warm%20directional%20light%2C%20authentic%20editorial%20photography&width=800&height=600&seq=career-benefit-reward-2026&orientation=landscape',
    imageAlt: 'African technicians commissioning industrial power equipment',
  },
  {
    icon: 'ri-heart-pulse-line',
    title: 'Wellbeing & Balance',
    description: 'Benefits designed to support your health, wellbeing and a sustainable balance between work and life.',
    image:
      'https://readdy.ai/api/search-image?query=Group%20of%20Nigerian%20colleagues%20relaxing%20together%20over%20coffee%20in%20a%20sunlit%20office%20courtyard%20with%20greenery%2C%20laughing%20in%20casual%20conversation%2C%20smart%20business%20casual%20attire%2C%20warm%20natural%20tones%2C%20candid%20lifestyle%20photography&width=800&height=600&seq=career-benefit-wellbeing-2026&orientation=landscape',
    imageAlt: 'Nigerian colleagues relaxing together during a work break',
  },
  {
    icon: 'ri-global-line',
    title: 'Nationwide Impact',
    description: 'Join a long-established Nigerian institution with reach across states, sectors and industries.',
    image:
      'https://readdy.ai/api/search-image?query=Wide%20view%20of%20a%20busy%20Nigerian%20industrial%20and%20logistics%20depot%20with%20warehouses%2C%20delivery%20trucks%20and%20staff%20in%20hi-vis%20vests%20coordinating%20loading%2C%20clear%20sky%2C%20warm%20late%20afternoon%20light%2C%20realistic%20documentary%20photography&width=800&height=600&seq=career-benefit-nationwide-2026&orientation=landscape',
    imageAlt: 'Nigerian industrial and logistics depot with staff and trucks',
  },
];

export interface HiringStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export const hiringSteps: HiringStep[] = [
  {
    step: '01',
    title: 'Apply',
    description: 'Submit your application and CV through our form, telling us which role and why you are a great fit.',
    icon: 'ri-file-text-line',
  },
  {
    step: '02',
    title: 'Screening',
    description: 'Our team reviews your application against the role and reaches out if there is a match.',
    icon: 'ri-search-eye-line',
  },
  {
    step: '03',
    title: 'Interviews',
    description: 'Meet the team through technical and behavioural conversations, in person or remotely.',
    icon: 'ri-chat-3-line',
  },
  {
    step: '04',
    title: 'Offer & Onboarding',
    description: 'We make an offer, welcome you aboard and set you up to succeed from day one.',
    icon: 'ri-hand-coin-line',
  },
];