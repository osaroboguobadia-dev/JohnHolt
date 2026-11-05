import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { projectCategories, projects } from '@/mocks/projects';

export default function ProjectsGallery() {
  const [active, setActive] = useState<string>('All Projects');

  const filtered = active === 'All Projects' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="project-gallery" className="py-20 md:py-28 bg-background-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Project Gallery"
          title="A Portfolio Built Across Nigeria"
          description="Filter by capability to explore a selection of the projects we have delivered for clients nationwide."
        />

        <div className="mt-9 flex flex-wrap gap-2.5">
          {projectCategories.map((category) => {
            const isActive = active === category;
            const count =
              category === 'All Projects'
                ? projects.length
                : projects.filter((p) => p.category === category).length;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={isActive}
                className={`cursor-pointer whitespace-nowrap inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-primary-600 text-background-50'
                    : 'bg-background-50 border border-background-200 text-foreground-700 hover:border-primary-300'
                }`}
              >
                {category}
                <span
                  className={`text-[11px] font-semibold rounded-full px-1.5 py-0.5 ${
                    isActive ? 'bg-background-50/20 text-background-50' : 'bg-background-200 text-foreground-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div key={active} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <ProjectCard key={project.id} project={project} delay={idx * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }: { project: (typeof projects)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLElement>(0.1);
  return (
    <article
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`group bg-background-50 border border-background-200 rounded-2xl overflow-hidden hover:border-primary-300 transition-colors flex flex-col ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <div className="h-52 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/65 via-foreground-950/10 to-transparent"></div>
        <span className="absolute top-4 left-4 text-[11px] font-semibold tracking-wide uppercase text-foreground-950 bg-accent-500 rounded-full px-3 py-1">
          {project.category}
        </span>
        <span className="absolute bottom-4 right-4 text-[11px] font-semibold text-background-50 bg-background-50/15 border border-background-50/25 rounded-full px-2.5 py-1">
          {project.year}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-950 leading-snug">
          {project.name}
        </h3>
        <p className="mt-1.5 text-xs text-foreground-500 flex items-center gap-1.5">
          <i className="ri-map-pin-line"></i>
          {project.location}
        </p>
        <p className="mt-3 text-sm text-foreground-600 leading-relaxed flex-1">{project.summary}</p>
        <div className="mt-5 pt-4 border-t border-background-200 flex items-center justify-between gap-3">
          <span className="text-xs text-foreground-500 flex items-center gap-1.5">
            <i className="ri-building-2-line"></i>
            {project.client}
          </span>
          <Link
            to="/contact"
            className="cursor-pointer whitespace-nowrap inline-flex items-center gap-1 text-xs font-semibold text-primary-700 hover:text-primary-800"
          >
            Enquire
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </article>
  );
}