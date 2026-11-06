import { usePageMeta } from '@/hooks/usePageMeta';
import ServicesHero from './components/ServicesHero';
import ServiceGrid from './components/ServiceGrid';
import DeliveryProcess from './components/DeliveryProcess';
import Industries from './components/Industries';
import ServicesFaq from './components/ServicesFaq';
import ServicesCta from './components/ServicesCta';

export default function Services() {
  usePageMeta({
    title: 'Services & Business Solutions | John Holt PLC',
    description:
      'Explore John Holt PLC services: power generation and generators, fire safety systems, engineering services and nationwide equipment trading and distribution.',
    path: '/services',
  });

  return (
    <>
      <ServicesHero />
      <ServiceGrid />
      <DeliveryProcess />
      <Industries />
      <ServicesFaq />
      <ServicesCta />
    </>
  );
}