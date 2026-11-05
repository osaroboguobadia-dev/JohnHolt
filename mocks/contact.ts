export interface ContactChannel {
  icon: string;
  title: string;
  lines: string[];
  action: string;
  href: string;
  external: boolean;
}

export const contactChannels: ContactChannel[] = [
  {
    icon: 'ri-phone-line',
    title: 'Call Us',
    lines: ['0700 5646 4658', '0700 JOHN HOLT', 'Mon – Fri, 8:00am – 5:00pm'],
    action: 'Call now',
    href: 'tel:070056464658',
    external: true,
  },
  {
    icon: 'ri-mail-line',
    title: 'Email Us',
    lines: ['marketingteam@jhplc.com', 'We reply within one business day'],
    action: 'Send an email',
    href: 'mailto:marketingteam@jhplc.com',
    external: true,
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Sales & Quotes',
    lines: ['marketingteam@jhplc.com', 'For pricing and proposals'],
    action: 'Request a quote',
    href: 'mailto:marketingteam@jhplc.com',
    external: true,
  },
  {
    icon: 'ri-tools-line',
    title: 'Service & Support',
    lines: ['marketingteam@jhplc.com', '24/7 emergency response'],
    action: 'Get support',
    href: 'mailto:marketingteam@jhplc.com',
    external: true,
  },
];

export interface Office {
  id: string;
  city: string;
  label: string;
  isHeadquarters: boolean;
  addressLines: string[];
  phone: string;
  email: string;
  hours: string;
  mapEmbed: string;
}

export const offices: Office[] = [
  {
    id: 'lagos-hq',
    city: 'Lagos',
    label: 'Head Office',
    isHeadquarters: true,
    addressLines: ['11B Ilabere Avenue', 'Ikoyi, Lagos', 'Nigeria'],
    phone: '0700 5646 4658',
    email: 'marketingteam@jhplc.com',
    hours: 'Mon – Fri, 8:00am – 5:00pm',
    mapEmbed:
      'https://www.google.com/maps?q=11B%20Ilabere%20Avenue%20Ikoyi%20Lagos%20Nigeria&output=embed',
  },
  {
    id: 'abuja',
    city: 'Abuja',
    label: 'Regional Office',
    isHeadquarters: false,
    addressLines: ['Central Business District, Abuja', 'Nigeria'],
    phone: '0700 5646 4658',
    email: 'marketingteam@jhplc.com',
    hours: 'Mon – Fri, 8:00am – 5:00pm',
    mapEmbed: 'https://www.google.com/maps?q=Central%20Business%20District%20Abuja%20Nigeria&output=embed',
  },
  {
    id: 'port-harcourt',
    city: 'Port Harcourt',
    label: 'Branch Office',
    isHeadquarters: false,
    addressLines: ['Trans-Amadi, Port Harcourt', 'Rivers State, Nigeria'],
    phone: '0700 5646 4658',
    email: 'marketingteam@jhplc.com',
    hours: 'Mon – Fri, 8:00am – 5:00pm',
    mapEmbed: 'https://www.google.com/maps?q=Trans-Amadi%20Port%20Harcourt%20Rivers%20State%20Nigeria&output=embed',
  },
];

export const enquiryDepartments = [
  'Sales & Quotations',
  'Power Generation & Generators',
  'Fire Safety & Firefighting',
  'Engineering & Technical Services',
  'Service & Maintenance',
  'Partnerships',
  'Careers',
  'General Enquiry',
];

export const enquirySubjects = [
  'Request a quote',
  'Product information',
  'Technical support',
  'Service booking',
  'General question',
  'Something else',
];

export const contactAssurances = [
  {
    icon: 'ri-time-line',
    title: 'Fast Response',
    description: 'Enquiries are acknowledged within one business day.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Your Data Is Safe',
    description: 'We use your details only to answer your enquiry.',
  },
  {
    icon: 'ri-user-star-line',
    title: 'Real People',
    description: 'A specialist, not a bot, reviews every message.',
  },
];