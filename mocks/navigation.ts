export const brandLogoUrl =
  'https://public.readdy.ai/ai/img_res/597537de-46bc-4c28-a323-7696a3b9dc4b.png';

export interface ServiceLink {
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const serviceLinks: ServiceLink[] = [
  {
    name: 'Power Generation & Generators',
    slug: 'power-generation',
    description: 'Generator sales, installation and 24/7 servicing',
    icon: 'ri-flashlight-line',
  },
  {
    name: 'Fire Safety & Firefighting',
    slug: 'fire-safety',
    description: 'Certified fire detection and suppression systems',
    icon: 'ri-fire-line',
  },
  {
    name: 'Engineering & Technical Services',
    slug: 'engineering-services',
    description: 'Industrial engineering, maintenance and technical support',
    icon: 'ri-tools-line',
  },
  {
    name: 'Warehousing & Inventory Management',
    slug: 'warehousing-logistics',
    description: 'Secure storage, inventory and distribution',
    icon: 'ri-archive-line',
  },
  {
    name: 'Renewable Energy & Solar',
    slug: 'renewable-energy',
    description: 'Solar, hybrid and battery storage systems',
    icon: 'ri-sun-line',
  },
  {
    name: 'Marine & Boat Building',
    slug: 'marine-boat-building',
    description: 'Vessel construction, refit and marine engineering',
    icon: 'ri-sailboat-line',
  },
];

export const mainNavLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'News & Insights', path: '/news' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export const footerServiceLinks = serviceLinks.map((s) => ({ name: s.name, path: `/services/${s.slug}` }));

export const footerCompanyLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Projects & Case Studies', path: '/projects' },
  { name: 'Partners & Brands', path: '/partners' },
  { name: 'Careers', path: '/careers' },
  { name: 'News & Insights', path: '/news' },
  { name: 'FAQs', path: '/faqs' },
];

export const footerLegalLinks = [
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms & Conditions', path: '/terms-conditions' },
  { name: 'Cookie Policy', path: '/cookie-policy' },
];

export const socialLinks = [
  { name: 'LinkedIn', icon: 'ri-linkedin-fill', url: 'https://linkedin.com' },
  { name: 'Facebook', icon: 'ri-facebook-fill', url: 'https://facebook.com' },
  { name: 'Instagram', icon: 'ri-instagram-line', url: 'https://instagram.com' },
  { name: 'X', icon: 'ri-twitter-x-line', url: 'https://x.com' },
];