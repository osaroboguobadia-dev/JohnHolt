import { Link } from 'react-router-dom';
import type { ServiceDetailData } from '@/mocks/serviceDetails';

export default function ServiceDetailHero({ detail }: { detail: ServiceDetailData }) {
  return (
    <section className="relative h-[460px] md:h-[560px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={detail.heroImage}
          alt={detail.name}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/94 via-foreground-950/70 to-foreground-950/45"></div>
      </div>

      <div className="relative z-10 w-full mx-auto max-w-[1440px] px-4 md:px-8 pb-12 md:pb-16">
        <nav
          className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-background-300 mb-5 animate-fade-up"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="cursor-pointer hover:text-accent-300 transition-colors">
            Home
          </Link>
          <i className="ri-arrow-right-s-line text-base"></i>
          <Link to="/services" className="cursor-pointer hover:text-accent-300 transition-colors">
            Services
          </Link>
          <i className="ri-arrow-right-s-line text-base"></i>
          <span className="text-background-100">{detail.shortName}</span>
        </nav>

        <span className="inline-flex items-center gap-2.5 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-300">
          <span className="w-11 h-11 flex items-center justify-center rounded-xl bg-background-50/10 border border-background-50/25">
            <i className={`${detail.icon} text-lg`}></i>
          </span>
          {detail.eyebrow}
        </span>
        <h1 className="font-heading mt-4 text-4xl md:text-6xl font-semibold text-background-50 leading-[1.08] max-w-3xl animate-fade-up">
          {detail.heroTitle}
        </h1>
        <p className="mt-5 text-sm md:text-lg text-background-200 leading-relaxed max-w-2xl">
          {detail.heroDescription}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-accent-500 text-foreground-950 text-sm font-semibold hover:bg-accent-600 transition-colors"
          >
            Request a Quote
          </Link>
          <Link
            to="/services"
            className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-background-50/10 border border-background-50/30 text-background-50 text-sm font-semibold hover:bg-background-50/20 transition-colors flex items-center gap-2"
          >
            <i className="ri-arrow-left-line"></i>
            All Services
          </Link>
        </div>
      </div>
    </section>
  );
}