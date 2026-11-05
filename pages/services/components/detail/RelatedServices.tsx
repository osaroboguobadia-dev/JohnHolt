import { Link } from 'react-router-dom';
import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { serviceCatalog } from '@/mocks/services';

export default function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const related = serviceCatalog.filter((s) => s.slug !== currentSlug);
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="py-20 md:py-28 bg-background-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Explore More"
          title="Other Services You May Need"
          description="We deliver connected capabilities — most clients combine more than one of our solutions."
        />

        <div ref={ref} className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          {related.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="cursor-pointer group bg-background-50 border border-background-200 rounded-2xl overflow-hidden hover:border-primary-300 transition-colors flex flex-col"
            >
              <div className="h-40 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/60 to-transparent"></div>
                <span className="absolute top-3 left-3 w-10 h-10 flex items-center justify-center rounded-lg bg-background-50 text-primary-600">
                  <i className={`${service.icon} text-lg`}></i>
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-heading text-base font-semibold text-foreground-950 leading-snug">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-foreground-600 leading-relaxed flex-1">{service.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 group-hover:text-primary-800">
                  Learn more
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}