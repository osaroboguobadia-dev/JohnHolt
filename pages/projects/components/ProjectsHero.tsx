import { Link } from 'react-router-dom';
import BrandMark from '@/components/base/BrandMark';

export default function ProjectsHero() {
  return (
    <section className="relative h-[460px] md:h-[580px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=wide%20cinematic%20view%20of%20large-scale%20industrial%20engineering%20projects%20at%20golden%20hour%20with%20cranes%20pipelines%20and%20power%20infrastructure%2C%20dramatic%20warm%20light%2C%20deep%20red%20and%20gold%20toned%20color%20grading%2C%20abstract%20stylized%20editorial%20photograph%2C%20sense%20of%20scale%20and%20progress&width=1920&height=1000&seq=jh-projects-hero-01&orientation=landscape"
          alt="John Holt PLC projects"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/93 via-foreground-950/65 to-foreground-950/45"></div>
        <BrandMark />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-[1440px] px-4 md:px-8 pb-12 md:pb-20">
        <nav
          className="flex items-center gap-2 text-xs md:text-sm text-background-300 mb-5 animate-fade-up"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="cursor-pointer hover:text-accent-300 transition-colors">
            Home
          </Link>
          <i className="ri-arrow-right-s-line text-base"></i>
          <span className="text-background-100">Projects</span>
        </nav>
        <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-300">
          <span className="w-6 h-px bg-accent-300"></span>
          Our Work
        </span>
        <h1 className="font-heading mt-4 text-4xl md:text-6xl font-semibold text-background-50 leading-[1.08] max-w-3xl animate-fade-up">
          Projects &amp; Case Studies
        </h1>
        <p className="mt-5 text-sm md:text-lg text-background-200 leading-relaxed max-w-2xl">
          Power systems, fire safety installations and engineering works delivered for businesses, institutions and
          industry across Nigeria — each one scoped, executed and supported to last.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-accent-500 text-foreground-950 text-sm font-semibold hover:bg-accent-600 transition-colors"
          >
            Start Your Project
          </Link>
          <a
            href="#project-gallery"
            className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-background-50/10 border border-background-50/30 text-background-50 text-sm font-semibold hover:bg-background-50/20 transition-colors flex items-center gap-2"
          >
            Browse Projects
            <i className="ri-arrow-down-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}