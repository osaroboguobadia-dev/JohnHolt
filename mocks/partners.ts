export interface Partner {
  id: string;
  name: string;
  monogram: string;
  category: string;
  since: string;
  description: string;
  icon: string;
}

export const partnerCategories: string[] = [
  'All Partners',
  'OEM & Manufacturers',
  'Authorised Distributors',
  'Service & Maintenance',
  'Technology & Solutions',
];

export const partners: Partner[] = [
  {
    id: 'volta-power-systems',
    name: 'Volta Power Systems',
    monogram: 'VP',
    category: 'OEM & Manufacturers',
    since: '1998',
    description: 'Global manufacturer of industrial diesel and gas generators trusted across our power division.',
    icon: 'ri-flashlight-line',
  },
  {
    id: 'sentinel-fire-tech',
    name: 'Sentinel Fire Technologies',
    monogram: 'SF',
    category: 'OEM & Manufacturers',
    since: '2003',
    description: 'Certified fire detection and suppression systems forming the backbone of our safety solutions.',
    icon: 'ri-fire-line',
  },
  {
    id: 'nordkraft-engines',
    name: 'Nordkraft Engines',
    monogram: 'NK',
    category: 'OEM & Manufacturers',
    since: '2007',
    description: 'Heavy-duty engine manufacturer supplying prime and standby units for demanding industrial loads.',
    icon: 'ri-settings-3-line',
  },
  {
    id: 'delta-electric-supply',
    name: 'Delta Electric Supply Co.',
    monogram: 'DE',
    category: 'Authorised Distributors',
    since: '2001',
    description: 'Authorised distributor of switchgear, control panels and electrical components nationwide.',
    icon: 'ri-plug-line',
  },
  {
    id: 'gridline-components',
    name: 'Gridline Components',
    monogram: 'GC',
    category: 'Authorised Distributors',
    since: '2011',
    description: 'Regional distribution partner for genuine spare parts, consumables and protective equipment.',
    icon: 'ri-store-3-line',
  },
  {
    id: 'procare-maintenance',
    name: 'ProCare Maintenance',
    monogram: 'PM',
    category: 'Service & Maintenance',
    since: '2014',
    description: 'Specialist servicing partner delivering planned maintenance and rapid response in remote regions.',
    icon: 'ri-tools-line',
  },
  {
    id: 'assetguard-engineering',
    name: 'AssetGuard Engineering',
    monogram: 'AG',
    category: 'Service & Maintenance',
    since: '2016',
    description: 'Field engineering partner supporting installation, commissioning and breakdown recovery.',
    icon: 'ri-user-settings-line',
  },
  {
    id: 'axis-control-systems',
    name: 'Axis Control Systems',
    monogram: 'AC',
    category: 'Technology & Solutions',
    since: '2018',
    description: 'Controls, automation and monitoring technologies that keep critical equipment observable.',
    icon: 'ri-cpu-line',
  },
  {
    id: 'lumen-iot',
    name: 'Lumen IoT',
    monogram: 'LI',
    category: 'Technology & Solutions',
    since: '2020',
    description: 'Remote monitoring and telemetry partner enabling predictive maintenance across client sites.',
    icon: 'ri-radar-line',
  },
  {
    id: 'horizon-logistics',
    name: 'Horizon Logistics',
    monogram: 'HL',
    category: 'Authorised Distributors',
    since: '2013',
    description: 'Nationwide logistics and warehousing partner ensuring parts and equipment reach sites on time.',
    icon: 'ri-truck-line',
  },
  {
    id: 'peak-safety-compliance',
    name: 'Peak Safety & Compliance',
    monogram: 'PS',
    category: 'Service & Maintenance',
    since: '2015',
    description: 'Independent fire safety inspection and certification partner for regulated facilities.',
    icon: 'ri-shield-check-line',
  },
  {
    id: 'core-lab-testing',
    name: 'CoreLab Testing',
    monogram: 'CL',
    category: 'Technology & Solutions',
    since: '2019',
    description: 'Testing and calibration laboratory partner ensuring equipment meets recognised standards.',
    icon: 'ri-flask-line',
  },
];

export interface PartnershipCategory {
  icon: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export const partnershipCategories: PartnershipCategory[] = [
  {
    icon: 'ri-building-2-line',
    title: 'OEM & Manufacturers',
    tagline: 'Global brands, local expertise',
    description:
      'We represent recognised global manufacturers, bringing world-class equipment and engineering to the Nigerian market with full factory-backed support.',
    highlights: ['Genuine equipment & warranty', 'Factory technical backup', 'Latest product lines'],
  },
  {
    icon: 'ri-store-3-line',
    title: 'Authorised Distributors',
    tagline: 'Reach and reliable supply',
    description:
      'Our distribution partners extend our reach nationwide, keeping genuine parts, components and consumables available wherever our clients operate.',
    highlights: ['Nationwide availability', 'Genuine parts only', 'Fast turnaround'],
  },
  {
    icon: 'ri-tools-line',
    title: 'Service & Maintenance',
    tagline: 'Keeping systems running',
    description:
      'Accredited service partners deliver planned maintenance and emergency response, ensuring the systems we install stay dependable for years.',
    highlights: ['Planned servicing', '24/7 breakdown response', 'Certified technicians'],
  },
  {
    icon: 'ri-cpu-line',
    title: 'Technology & Solutions',
    tagline: 'Smarter, connected systems',
    description:
      'Technology partners bring monitoring, automation and testing capabilities that make our solutions more reliable, visible and efficient.',
    highlights: ['Remote monitoring', 'Automation & controls', 'Testing & calibration'],
  },
];

export interface PartnerBenefit {
  icon: string;
  title: string;
  description: string;
}

export const partnerBenefits: PartnerBenefit[] = [
  {
    icon: 'ri-global-line',
    title: 'Established Market Reach',
    description: 'Plug into a long-established institution with clients, projects and presence across states and sectors.',
  },
  {
    icon: 'ri-award-line',
    title: 'Trusted Brand & Heritage',
    description: 'Stand alongside a respected name built on decades of integrity, reliability and technical excellence.',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Dedicated Partner Support',
    description: 'A clear point of contact, responsive communication and support that helps you deliver for clients.',
  },
  {
    icon: 'ri-graduation-cap-line',
    title: 'Training & Enablement',
    description: 'Technical training, documentation and product knowledge that keep your teams sharp and confident.',
  },
  {
    icon: 'ri-line-chart-line',
    title: 'Shared Growth',
    description: 'Collaborative commercial models and co-marketing that grow opportunity for both sides.',
  },
  {
    icon: 'ri-shield-star-line',
    title: 'Standards You Can Trust',
    description: 'Work to specifications and safety disciplines that protect your reputation as much as ours.',
  },
];

export interface PartnerStat {
  value: number;
  suffix: string;
  label: string;
}

export const partnerStats: PartnerStat[] = [
  { value: 40, suffix: '+', label: 'Global & local partners' },
  { value: 4, suffix: '', label: 'Partnership categories' },
  { value: 30, suffix: '+', label: 'Years of relationships' },
  { value: 12, suffix: '+', label: 'States reached' },
];

export const partnerFormCategories: string[] = [
  'OEM & Manufacturers',
  'Authorised Distributors',
  'Service & Maintenance',
  'Technology & Solutions',
];