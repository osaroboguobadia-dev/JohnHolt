import LegalLayout from '@/components/feature/LegalLayout';
import { usePageMeta } from '@/hooks/usePageMeta';
import { termsConditions } from '@/mocks/legal';

export default function TermsConditions() {
  usePageMeta({
    title: `${termsConditions.title} | John Holt PLC`,
    description: termsConditions.description,
    path: `/${termsConditions.slug}`,
  });

  return <LegalLayout doc={termsConditions} />;
}