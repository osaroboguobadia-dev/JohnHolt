import NotFound from '@/pages/NotFound';
import { usePageMeta } from '@/hooks/usePageMeta';
import { getServiceDetail } from '@/mocks/serviceDetails';
import ServiceDetailHero from './components/detail/ServiceDetailHero';
import ServiceOverview from './components/detail/ServiceOverview';
import ServiceCapabilities from './components/detail/ServiceCapabilities';
import ServiceDetailFaq from './components/detail/ServiceDetailFaq';
import RelatedServices from './components/detail/RelatedServices';
import ServicesCta from './components/ServicesCta';

export default function ServiceDetail({ slug }: { slug: string }) {
  const detail = getServiceDetail(slug);

  usePageMeta({
    title: detail ? `${detail.name} | John Holt PLC` : 'Service Not Found | John Holt PLC',
    description: detail
      ? detail.heroDescription
      : 'The service you are looking for could not be found. Explore John Holt PLC power, fire safety and engineering solutions instead.',
    path: detail ? `/services/${detail.slug}` : '/services',
  });

  if (!detail) {
    return <NotFound />;
  }

  return (
    <>
      <ServiceDetailHero detail={detail} />
      <ServiceOverview detail={detail} />
      <ServiceCapabilities detail={detail} />
      <ServiceDetailFaq detail={detail} />
      <RelatedServices currentSlug={detail.slug} />
      <ServicesCta />
    </>
  );
}