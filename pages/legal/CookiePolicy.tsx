import LegalLayout from '@/components/feature/LegalLayout';
import { usePageMeta } from '@/hooks/usePageMeta';
import { cookiePolicy } from '@/mocks/legal';

export default function CookiePolicy() {
  usePageMeta({
    title: `${cookiePolicy.title} | John Holt PLC`,
    description: cookiePolicy.description,
    path: `/${cookiePolicy.slug}`,
  });

  return <LegalLayout doc={cookiePolicy} />;
}