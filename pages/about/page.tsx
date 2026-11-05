import { usePageMeta } from '@/hooks/usePageMeta';
import AboutHero from './components/AboutHero';
import Story from './components/Story';
import MissionValues from './components/MissionValues';
import Timeline from './components/Timeline';
import Leadership from './components/Leadership';
import AboutCta from './components/AboutCta';

export default function About() {
  usePageMeta({
    title: 'About Us | John Holt PLC',
    description:
      'Learn about John Holt PLC — our heritage, mission, values, leadership and decades of delivering power, fire safety and engineering solutions across Nigeria.',
    path: '/about',
  });

  return (
    <>
      <AboutHero />
      <Story />
      <MissionValues />
      <Timeline />
      <Leadership />
      <AboutCta />
    </>
  );
}