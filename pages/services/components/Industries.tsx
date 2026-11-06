import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/base/SectionHeading';
import { industries } from '@/mocks/services';

export default function Industries() {
  return (
    <section className="py-20 md:py-28 bg-background-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Industries We Power & Protect"
          description="From manufacturing floors to hospital wards and government facilities, our solutions are built for the demands of every sector."
        />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {industries.map((industry, idx) => (
            <IndustryCard key={industry.name} industry={industry} delay={idx * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry, delay }: { industry: (typeof industries)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`bg-background-50 border border-background-200 rounded-2xl p-5 md:p-6 hover:border-primary-300 transition-colors ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <span className="w-11 h-11 flex items-center justify-center rounded-xl bg-accent-100 text-accent-700">
        <i className={`${industry.icon} text-xl`}></i>
      </span>
      <h3 className="font-heading mt-4 text-sm md:text-base font-semibold text-foreground-950 leading-snug">
        {industry.name}
      </h3>
    </div>
  );
}