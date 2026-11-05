import { offices, type Office } from '@/mocks/contact';
import { faqGroups } from '@/mocks/faqs';
import { socialLinks, brandLogoUrl } from '@/mocks/navigation';

/** Canonical site origin used across all structured-data URLs. */
export const SITE_URL = 'https://www.jhplc.com';
export const SITE_NAME = 'John Holt PLC';

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const CONTACT_URL = `${SITE_URL}/contact`;

/**
 * Postal address derived from a single office's visible address lines.
 * Only mirrors what is already shown on the site — no invented facts.
 */
function buildPostalAddress(office: Office) {
  return {
    '@type': 'PostalAddress',
    streetAddress: office.addressLines.join(', '),
    addressLocality: office.city,
    addressCountry: 'NG',
  };
}

/** Opening hours expressed from the office's visible "Mon – Fri, 8:00am – 5:00pm" text. */
function buildOpeningHours() {
  return [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ];
}

/**
 * Organization schema for the company as a whole. Rendered site-wide so it
 * describes the business on every page.
 */
export function buildOrganizationSchema() {
  const head = offices.find((office) => office.isHeadquarters) ?? offices[0];

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: brandLogoUrl,
    },
    description:
      'John Holt PLC delivers trusted power generation, generator servicing, fire safety and engineering solutions for businesses and institutions across Nigeria.',
    email: 'marketingteam@jhplc.com',
    telephone: head.phone,
    address: buildPostalAddress(head),
    sameAs: socialLinks.map((social) => social.url),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: head.phone,
        email: 'marketingteam@jhplc.com',
        areaServed: 'NG',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'marketingteam@jhplc.com',
        areaServed: 'NG',
        availableLanguage: 'English',
      },
    ],
  };
}

/** LocalBusiness schema for one office location. */
export function buildLocalBusinessSchema(office: Office) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${CONTACT_URL}#${office.id}`,
    name: `${SITE_NAME} — ${office.city} ${office.label}`,
    image: brandLogoUrl,
    url: CONTACT_URL,
    telephone: office.phone,
    email: office.email,
    address: buildPostalAddress(office),
    openingHoursSpecification: buildOpeningHours(),
    parentOrganization: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: SITE_NAME,
    },
  };
}

/** LocalBusiness schema for every office the site lists. */
export function buildLocalBusinessSchemas() {
  return offices.map(buildLocalBusinessSchema);
}

/**
 * FAQPage schema built from every question/answer shown on the FAQs page,
 * so the markup always matches the visible accordion content.
 */
export function buildFaqPageSchema() {
  const questions = faqGroups.flatMap((group) => group.faqs);

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}