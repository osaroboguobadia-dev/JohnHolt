import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';

export default function AboutCta() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section className="py-20 md:py-28 bg-background-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div ref={ref} className={`relative rounded-3xl overflow-hidden ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <img
            src="https://readdy.ai/api/search-image?query=modern%20industrial%20facility%20interior%20with%20engineers%20and%20warm%20ambient%20lighting%20at%20dusk%2C%20sense%20of%20scale%20and%20reliability%2C%20deep%20red%20and%20gold%20toned%20color%20grading%2C%20cinematic%20wide%20shot&width=1920&height=900&seq=jh-about-cta-01&orientation=landscape&nocache=true"
            alt="Partner with John Holt PLC"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/92 via-primary-800/85 to-foreground-950/80"></div>
          <div className="relative px-6 py-16 md:py-20 md:px-16 text-center">
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-300">
              <span className="w-6 h-px bg-accent-300"></span>
              Let&apos;s Build Together
              <span className="w-6 h-px bg-accent-300"></span>
            </span>
            <h2 className="font-heading mt-4 text-3xl md:text-5xl font-semibold text-background-50 max-w-2xl mx-auto leading-tight">
              Partner With a Name Global Economies Have Trusted for Generations
            </h2>
            <p className="mt-4 text-sm md:text-base text-background-200 max-w-xl mx-auto">
              Whether you need reliable power, certified fire safety or expert engineering, our team is ready to deliver
              the right solution for your business, institution or project.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
      </div>
    </section>
  );
}