import { Link } from 'react-router-dom';
import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { featuredProjects } from '@/mocks/home';

export default function FeaturedProjects() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Our Work"
            title="Featured Projects &amp; Case Studies"
            description="A glimpse into how we partner with clients across the globe to deliver dependable, large-scale solutions."
          />
          <Link
            to="/projects"
            className="cursor-pointer whitespace-nowrap inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800"
          >
            View all projects
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.name} project={project} delay={idx * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }: { project: (typeof featuredProjects)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`group relative rounded-2xl overflow-hidden h-[340px] ${inView ? 'animate-fade-up' : 'opacity-0'}`}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/90 via-foreground-950/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="inline-block text-[11px] font-semibold tracking-wide uppercase text-accent-300 bg-background-50/10 border border-background-50/20 rounded-full px-3 py-1">
          {project.category}
        </span>
        <h3 className="font-heading mt-3 text-lg font-semibold text-background-50 leading-snug">{project.name}</h3>
        <p className="mt-1 text-xs text-background-300 flex items-center gap-1.5">
          <i className="ri-map-pin-line"></i>
          {project.location}
        </p>
      </div>
    </div>
  );
}