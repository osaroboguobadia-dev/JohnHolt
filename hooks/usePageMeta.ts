import { useEffect } from 'react';

const SITE_NAME = 'John Holt PLC';
const BASE_URL = 'https://www.jhplc.com';

export interface PageMeta {
  /** Page title. The site name is appended automatically unless already present. */
  title: string;
  /** Meta description (aim for 120-160 characters). */
  description: string;
  /** Route path used to build the canonical URL, e.g. "/about". */
  path: string;
  /** Open Graph type, defaults to "website". Use "article" for detail pages. */
  type?: string;
}

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el!.setAttribute(key, value));
}

/**
 * Sets per-page document title, meta description, Open Graph / Twitter tags and
 * the canonical link. Keeps the site's static head tags in sync as users navigate.
 */
export function usePageMeta({ title, description, path, type = 'website' }: PageMeta) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const url = path === '/' ? `${BASE_URL}/` : `${BASE_URL}${path}`;

    document.title = fullTitle;

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });

    let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }, [title, description, path, type]);
}