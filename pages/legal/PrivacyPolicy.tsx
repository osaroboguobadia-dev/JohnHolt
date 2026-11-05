import LegalLayout from '@/components/feature/LegalLayout';
import { usePageMeta } from '@/hooks/usePageMeta';
import { privacyPolicy } from '@/mocks/legal';

export default function PrivacyPolicy() {
  usePageMeta({
    title: `${privacyPolicy.title} | John Holt PLC`,
    description: privacyPolicy.description,
    path: `/${privacyPolicy.slug}`,
  });

  return <LegalLayout doc={privacyPolicy} />;
}