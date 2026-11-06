import { Link } from 'react-router-dom';

export default function ServicesHero() {
  return (
    <section className="relative h-[460px] md:h-[600px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}images/5b0664f5205430b5.jpg`}
          alt="John Holt PLC services"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/93 via-foreground-950/65 to-foreground-950/45"></div>
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
          <span className="text-background-100">Services</span>
        </nav>
        <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-300">
          <span className="w-6 h-px bg-accent-300"></span>
          What We Do
        </span>
        <h1 className="font-heading mt-4 text-4xl md:text-6xl font-semibold text-background-50 leading-[1.08] max-w-3xl animate-fade-up">
          Power, Protection &amp; Engineering Solutions
        </h1>
        <p className="mt-5 text-sm md:text-lg text-background-200 leading-relaxed max-w-2xl">
          Integrated power generation, certified fire safety, expert engineering and nationwide distribution — delivered
          by a name Nigeria has trusted for generations.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-accent-500 text-foreground-950 text-sm font-semibold hover:bg-accent-600 transition-colors"
          >
            Request a Quote
          </Link>
          <a
            href="#service-catalog"
            className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-background-50/10 border border-background-50/30 text-background-50 text-sm font-semibold hover:bg-background-50/20 transition-colors flex items-center gap-2"
          >
            Explore Services
            <i className="ri-arrow-down-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}