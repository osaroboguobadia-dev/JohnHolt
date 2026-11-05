import { Link } from 'react-router-dom';
import BrandMark from '@/components/base/BrandMark';

export default function Hero() {
  return (
    <section className="relative h-[560px] md:h-[720px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=powerful%20industrial%20generator%20facility%20at%20golden%20hour%20in%20Nigeria%2C%20engineers%20silhouettes%20reviewing%20equipment%2C%20dramatic%20cinematic%20lighting%2C%20deep%20red%20and%20gold%20toned%20color%20grading%2C%20wide%20establishing%20shot%2C%20sense%20of%20scale%20and%20technical%20sophistication&width=1920&height=1200&seq=jh-hero-01&orientation=landscape&nocache=true"
          alt="John Holt PLC industrial power facility"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/80 via-foreground-950/55 to-foreground-950/85"></div>
        <BrandMark className="hidden md:flex" />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-300 bg-background-50/10 border border-background-50/20 rounded-full px-4 py-1.5">
            Est. 1897 &middot; Nigerian Roots, Global Reach
          </span>
          <h1 className="font-heading mt-6 text-4xl md:text-6xl font-semibold text-background-50 leading-[1.08]">
            Engineering Power, Safety &amp; Progress Worldwide
          </h1>
          <p className="mt-5 text-base md:text-lg text-background-200 leading-relaxed max-w-xl">
            John Holt PLC brings over a century of heritage and technical excellence to power generation, fire safety,
            and engineering solutions — trusted by businesses, institutions and industries across the globe.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
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
              Explore Our Services
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('home-stats')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to learn more"
        className="cursor-pointer hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full border border-background-50/40 text-background-50 items-center justify-center hover:bg-background-50/10 transition-colors"
      >
        <i className="ri-arrow-down-line text-xl"></i>
      </button>
    </section>
  );
}