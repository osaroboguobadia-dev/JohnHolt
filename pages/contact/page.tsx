import { usePageMeta } from '@/hooks/usePageMeta';
import JsonLd from '@/components/base/JsonLd';
import { buildLocalBusinessSchemas } from '@/lib/schema';
import ContactHero from './components/ContactHero';
import ContactChannels from './components/ContactChannels';
import EnquirySection from './components/EnquirySection';
import OfficeLocations from './components/OfficeLocations';
import ClosingCta from '@/pages/home/components/ClosingCta';

export default function Contact() {
  usePageMeta({
    title: 'Contact Us | John Holt PLC',
    description:
      'Contact John Holt PLC for quotes, technical advice and support. Reach our offices in Lagos, Abuja and Port Harcourt, or send us an enquiry online.',
    path: '/contact',
  });

  return (
    <>
      <JsonLd data={buildLocalBusinessSchemas()} />
      <ContactHero />
      <ContactChannels />
      <EnquirySection />
      <OfficeLocations />
      <ClosingCta />
    </>
  );
}