import { Link } from 'react-router-dom';
import BrandMark from '@/components/base/BrandMark';

interface FaqHeroProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export default function FaqHero({ query, onQueryChange }: FaqHeroProps) {
  return (
    <section className="relative h-[460px] md:h-[600px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=friendly%20support%20specialist%20with%20headset%20assisting%20clients%20in%20a%20bright%20modern%20corporate%20office%2C%20warm%20golden%20light%2C%20deep%20red%20and%20gold%20toned%20cinematic%20color%20grading%2C%20stylized%20editorial%20photograph%2C%20sense%20of%20helpfulness%20and%20reassurance&width=1920&height=1000&seq=jh-faqs-hero-01&orientation=landscape"
          alt="Frequently asked questions"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/93 via-foreground-950/68 to-foreground-950/48"></div>
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
          <span className="text-background-100">FAQs</span>
        </nav>
        <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-300">
          <span className="w-6 h-px bg-accent-300"></span>
          Help Centre
        </span>
        <h1 className="font-heading mt-4 text-4xl md:text-6xl font-semibold text-background-50 leading-[1.08] max-w-3xl animate-fade-up">
          Frequently Asked Questions
        </h1>
        <p className="mt-5 text-sm md:text-lg text-background-200 leading-relaxed max-w-2xl">
          Answers about our power, fire safety and engineering solutions &mdash; from sizing and installation to
          maintenance, warranty and nationwide support.
        </p>

        <div className="mt-8 max-w-xl">
          <div className="relative">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-foreground-400 text-lg"></i>
            <input
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search questions, e.g. &ldquo;generator sizing&rdquo;"
              aria-label="Search frequently asked questions"
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-background-50 text-sm text-foreground-800 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-accent-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}