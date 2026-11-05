import { Link } from 'react-router-dom';
import BrandMark from '@/components/base/BrandMark';
import { useInView } from '@/hooks/useInView';
import { featuredCaseStudy } from '@/mocks/projects';

export default function FeaturedCaseStudy() {
  const study = featuredCaseStudy;
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="py-20 md:py-28 bg-background-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div ref={ref} className={`mb-10 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-600">
            <span className="w-6 h-px bg-accent-600"></span>
            Featured Case Study
          </span>
          <h2 className="font-heading mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground-950 leading-tight">
            {study.name}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className={`relative rounded-3xl overflow-hidden h-[320px] lg:h-auto ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
            <img
              src={study.image}
              alt={study.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/60 to-transparent"></div>
            <BrandMark variant="badge" />
            <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground-950 bg-accent-500 rounded-full px-3 py-1.5">
                <i className="ri-map-pin-line"></i>
                {study.location}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-background-50 bg-background-50/15 border border-background-50/25 rounded-full px-3 py-1.5">
                <i className="ri-calendar-line"></i>
                {study.year}
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-4">
              <MetaCard icon="ri-building-2-line" label="Client" value={study.client} />
              <MetaCard icon="ri-stack-line" label="Sector" value={study.sector} />
            </div>

            <p className="mt-6 text-sm md:text-base text-foreground-600 leading-relaxed">{study.overview}</p>

            <h3 className="font-heading mt-7 text-base font-semibold text-foreground-950">What We Delivered</h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {study.scope.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground-700 leading-snug">
                  <i className="ri-check-line text-primary-600 mt-0.5 shrink-0"></i>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="cursor-pointer mt-8 self-start whitespace-nowrap inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary-600 text-background-50 text-sm font-semibold hover:bg-primary-700 transition-colors"
            >
              Discuss a Similar Project
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {study.outcomes.map((outcome, idx) => (
            <OutcomeCard key={outcome.title} outcome={outcome} delay={idx * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetaCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-background-100 border border-background-200 rounded-2xl p-4">
      <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-background-50 text-primary-600">
        <i className={`${icon} text-lg`}></i>
      </span>
      <p className="mt-3 text-[11px] uppercase tracking-wide text-foreground-500">{label}</p>
      <p className="font-heading mt-0.5 text-sm font-semibold text-foreground-950 leading-snug">{value}</p>
    </div>
  );
}

function OutcomeCard({ outcome, delay }: { outcome: (typeof featuredCaseStudy.outcomes)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`bg-background-100 border border-background-200 rounded-2xl p-6 h-full ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <span className="w-11 h-11 flex items-center justify-center rounded-xl bg-accent-100 text-accent-700">
        <i className={`${outcome.icon} text-xl`}></i>
      </span>
      <h3 className="font-heading mt-4 text-base font-semibold text-foreground-950">{outcome.title}</h3>
      <p className="mt-2 text-sm text-foreground-600 leading-relaxed">{outcome.text}</p>
    </div>
  );
}