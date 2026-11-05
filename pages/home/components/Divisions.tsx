import { Link } from 'react-router-dom';
import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { divisions } from '@/mocks/home';

export default function Divisions() {
  return (
    <section className="py-20 md:py-28 bg-background-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="What We Do"
            title="Business Divisions &amp; Solutions"
            description="Integrated solutions across power, safety, energy, storage and engineering — designed around the needs of modern businesses and institutions worldwide."
          />
          <Link
            to="/services"
            className="cursor-pointer whitespace-nowrap inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800"
          >
            View all services
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((division, idx) => (
            <DivisionCard key={division.slug} division={division} delay={idx * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DivisionCard({ division, delay }: { division: (typeof divisions)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLAnchorElement>(0.2);
  return (
    <Link
      ref={ref}
      to={`/services/${division.slug}`}
      style={{ animationDelay: `${delay}ms` }}
      className={`cursor-pointer group block bg-background-50 rounded-2xl border border-background-200 overflow-hidden hover:border-primary-300 transition-colors ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <div className="h-44 overflow-hidden">
        <img
          src={division.image}
          alt={division.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <span className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
          <i className={`${division.icon} text-xl`}></i>
        </span>
        <h3 className="font-heading mt-4 text-base font-semibold text-foreground-950 leading-snug">{division.name}</h3>
        <p className="mt-2 text-xs text-foreground-500 leading-relaxed">{division.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700">
          Learn more
          <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
        </span>
      </div>
    </Link>
  );
}