import { usePageMeta } from '@/hooks/usePageMeta';
import PartnersHero from './components/PartnersHero';
import PartnersStats from './components/PartnersStats';
import PartnerLogos from './components/PartnerLogos';
import PartnershipCategories from './components/PartnershipCategories';
import WhyPartner from './components/WhyPartner';
import BecomePartner from './components/BecomePartner';
import ClosingCta from '@/pages/home/components/ClosingCta';

export default function Partners() {
  usePageMeta({
    title: 'Partners & Brands | John Holt PLC',
    description:
      'Discover John Holt PLC partners and brands — leading manufacturers, distributors and technology providers delivering dependable solutions across Nigeria.',
    path: '/partners',
  });

  return (
    <>
      <PartnersHero />
      <PartnersStats />
      <PartnerLogos />
      <PartnershipCategories />
      <WhyPartner />
      <BecomePartner />
      <ClosingCta />
    </>
  );
}