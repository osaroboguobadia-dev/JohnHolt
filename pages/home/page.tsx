import { usePageMeta } from '@/hooks/usePageMeta';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Intro from './components/Intro';
import Divisions from './components/Divisions';
import FeaturedProjects from './components/FeaturedProjects';
import WhyChooseUs from './components/WhyChooseUs';
import Certification from './components/Certification';
import Testimonials from './components/Testimonials';
import NewsPreview from './components/NewsPreview';
import ClosingCta from './components/ClosingCta';

export default function Home() {
  usePageMeta({
    title: 'John Holt PLC | Power, Fire Safety & Engineering Solutions Worldwide',
    description:
      'John Holt PLC delivers trusted power generation, generator servicing, fire safety and engineering solutions for businesses and institutions worldwide, with heritage dating back to 1897.',
    path: '/',
  });

  return (
    <>
      <Hero />
      <StatsBar />
      <Intro />
      <Divisions />
      <FeaturedProjects />
      <WhyChooseUs />
      <Certification />
      <Testimonials />
      <NewsPreview />
      <ClosingCta />
    </>
  );
}