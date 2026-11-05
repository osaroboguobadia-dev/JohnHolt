import { Link } from 'react-router-dom';
import BrandMark from '@/components/base/BrandMark';

export default function PartnersHero() {
  return (
    <section className="relative h-[440px] md:h-[580px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=close%20up%20of%20a%20confident%20professional%20handshake%20between%20business%20partners%20in%20a%20modern%20industrial%20office%2C%20warm%20golden%20light%2C%20deep%20red%20and%20gold%20toned%20cinematic%20color%20grading%2C%20stylized%20editorial%20photograph%2C%20sense%20of%20trust%20and%20partnership&width=1920&height=1000&seq=jh-partners-hero-01&orientation=landscape"
          alt="Partners and brands of John Holt PLC"
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
          <span className="text-background-100">Partners &amp; Brands</span>
        </nav>
        <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-300">
          <span className="w-6 h-px bg-accent-300"></span>
          Who We Work With
        </span>
        <h1 className="font-heading mt-4 text-4xl md:text-6xl font-semibold text-background-50 leading-[1.08] max-w-3xl animate-fade-up">
          Partners &amp; Brands
        </h1>
        <p className="mt-5 text-sm md:text-lg text-background-200 leading-relaxed max-w-2xl">
          Long-standing relationships with world-class manufacturers, distributors, service specialists and technology
          providers let us deliver dependable solutions across Nigeria.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#become-a-partner"
            className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-accent-500 text-foreground-950 text-sm font-semibold hover:bg-accent-600 transition-colors flex items-center gap-2"
          >
            Become a Partner
            <i className="ri-arrow-down-line"></i>
          </a>
          <Link
            to="/contact"
            className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-background-50/10 border border-background-50/30 text-background-50 text-sm font-semibold hover:bg-background-50/20 transition-colors flex items-center gap-2"
          >
            Talk to Our Team
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}