import { Link } from 'react-router-dom';
import BrandMark from '@/components/base/BrandMark';

export default function CareersHero() {
  return (
    <section className="relative h-[440px] md:h-[580px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://public.readdy.ai/ai/img_res/edited_42c35c4fe42ea2baad18585ddcee4be9_39ce2883.jpg"
          alt="Black Nigerian engineers and professionals collaborating at John Holt PLC"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/92 via-foreground-950/40 to-foreground-950/20"></div>
        <BrandMark variant="banner" />
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
          <span className="text-background-100">Careers</span>
        </nav>
        <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-300">
          <span className="w-6 h-px bg-accent-300"></span>
          Careers
        </span>
        <h1 className="font-heading mt-4 text-4xl md:text-6xl font-semibold text-background-50 leading-[1.08] max-w-3xl animate-fade-up">
          Build a Career That Powers Progress
        </h1>
        <p className="mt-5 text-sm md:text-lg text-background-200 leading-relaxed max-w-2xl">
          Join a long-established Nigerian institution where skilled people deliver power, fire safety and engineering
          solutions that keep businesses and communities moving.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#open-roles"
            className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-accent-500 text-foreground-950 text-sm font-semibold hover:bg-accent-600 transition-colors flex items-center gap-2"
          >
            View Open Roles
            <i className="ri-arrow-down-line"></i>
          </a>
          <Link
            to="/about"
            className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-background-50/10 border border-background-50/30 text-background-50 text-sm font-semibold hover:bg-background-50/20 transition-colors flex items-center gap-2"
          >
            About John Holt PLC
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}