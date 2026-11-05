import { usePageMeta } from '@/hooks/usePageMeta';
import ProjectsHero from './components/ProjectsHero';
import ProjectsStats from './components/ProjectsStats';
import FeaturedCaseStudy from './components/FeaturedCaseStudy';
import ProjectsGallery from './components/ProjectsGallery';
import ProjectOutcomes from './components/ProjectOutcomes';
import ClosingCta from '@/pages/home/components/ClosingCta';

export default function Projects() {
  usePageMeta({
    title: 'Projects & Case Studies | John Holt PLC',
    description:
      'See how John Holt PLC delivers power, fire safety and engineering projects across Nigeria, with case studies, outcomes and the standards behind every delivery.',
    path: '/projects',
  });

  return (
    <>
      <ProjectsHero />
      <ProjectsStats />
      <FeaturedCaseStudy />
      <ProjectsGallery />
      <ProjectOutcomes />
      <ClosingCta />
    </>
  );
}