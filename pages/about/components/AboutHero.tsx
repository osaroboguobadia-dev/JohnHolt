import { Link } from 'react-router-dom';
import BrandMark from '@/components/base/BrandMark';

export default function AboutHero() {
  return (
    <section className="relative h-[440px] md:h-[580px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=wide%20industrial%20skyline%20of%20a%20modern%20Nigerian%20city%20at%20golden%20hour%20with%20power%20infrastructure%20and%20cranes%2C%20dramatic%20cinematic%20light%2C%20deep%20red%20and%20gold%20toned%20color%20grading%2C%20abstract%20stylised%20editorial%20photograph%2C%20sense%20of%20scale%20and%20progress&width=1920&height=1000&seq=jh-about-hero-01&orientation=landscape&nocache=true"
          alt="John Holt PLC — built on heritage"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/92 via-foreground-950/60 to-foreground-950/40"></div>
        <BrandMark />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-[1440px] px-4 md:px-8 pb-12 md:pb-20">
        <nav className="flex items-center gap-2 text-xs md:text-sm text-background-300 mb-5 animate-fade-up" aria-label="Breadcrumb">
          <Link to="/" className="cursor-pointer hover:text-accent-300 transition-colors">Home</Link>
          <i className="ri-arrow-right-s-line text-base"></i>
          <span className="text-background-100">About Us</span>
        </nav>
        <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-300">
          <span className="w-6 h-px bg-accent-300"></span>
          About Us
        </span>
        <h1 className="font-heading mt-4 text-4xl md:text-6xl font-semibold text-background-50 leading-[1.08] max-w-3xl animate-fade-up">
          Built on Heritage, Driven by Excellence
        </h1>
        <p className="mt-5 text-sm md:text-lg text-background-200 leading-relaxed max-w-2xl">
          For generations, John Holt PLC has stood at the heart of Nigerian enterprise — delivering dependable power,
          certified fire safety and world-class engineering to the businesses and institutions that keep the nation moving.
        </p>
      </div>
    </section>
  );
}