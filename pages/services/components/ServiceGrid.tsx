import { Link } from 'react-router-dom';
import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { serviceCatalog } from '@/mocks/services';

export default function ServiceGrid() {
  return (
    <section id="service-catalog" className="py-20 md:py-28 bg-background-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Every Solution We Deliver"
          description="Four connected capabilities that keep power flowing, operations safe and businesses moving across Nigeria."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {serviceCatalog.map((service, idx) => (
            <ServiceCard key={service.slug} service={service} delay={idx * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }: { service: (typeof serviceCatalog)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`group bg-background-50 rounded-2xl border border-background-200 overflow-hidden hover:border-primary-300 transition-colors flex flex-col ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <div className="h-52 md:h-60 overflow-hidden relative">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/55 to-transparent"></div>
        <span className="absolute top-4 left-4 w-11 h-11 flex items-center justify-center rounded-xl bg-background-50 text-primary-600">
          <i className={`${service.icon} text-xl`}></i>
        </span>
        <span className="absolute bottom-4 left-4 text-[11px] font-semibold tracking-wide uppercase text-foreground-950 bg-accent-500 rounded-full px-3 py-1">
          {service.tagline}
        </span>
      </div>

      <div className="p-6 md:p-7 flex flex-col flex-1">
        <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground-950 leading-snug">
          {service.name}
        </h3>
        <p className="mt-3 text-sm text-foreground-600 leading-relaxed">{service.description}</p>

        <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs text-foreground-700 leading-snug">
              <i className="ri-check-line text-primary-600 mt-0.5 shrink-0"></i>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-5 border-t border-background-200 flex flex-wrap items-center justify-between gap-3">
          <Link
            to={`/services/${service.slug}`}
            className="cursor-pointer inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
          >
            Learn more
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
          </Link>
          <Link
            to="/contact"
            className="cursor-pointer whitespace-nowrap inline-flex items-center gap-1.5 text-xs font-semibold text-foreground-600 hover:text-primary-700"
          >
            <i className="ri-mail-send-line"></i>
            Request a quote
          </Link>
        </div>
      </div>
    </div>
  );
}