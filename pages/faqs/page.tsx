import { useState } from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';
import JsonLd from '@/components/base/JsonLd';
import { buildFaqPageSchema } from '@/lib/schema';
import FaqHero from './components/FaqHero';
import FaqContent from './components/FaqContent';
import FaqSupport from './components/FaqSupport';
import ClosingCta from '@/pages/home/components/ClosingCta';

export default function Faqs() {
  const [query, setQuery] = useState('');

  usePageMeta({
    title: 'Frequently Asked Questions | John Holt PLC',
    description:
      'Answers to common questions about John Holt PLC services, power generation, fire safety, engineering, orders, support and working with our team.',
    path: '/faqs',
  });

  return (
    <>
      <JsonLd data={buildFaqPageSchema()} />
      <FaqHero query={query} onQueryChange={setQuery} />
      <FaqContent query={query} onClearSearch={() => setQuery('')} />
      <FaqSupport />
      <ClosingCta />
    </>
  );
}