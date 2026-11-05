import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { reasons } from '@/mocks/home';
import { brandLogoUrl } from '@/mocks/navigation';

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" aria-hidden="true">
        <img
          src="https://readdy.ai/api/search-image?query=abstract%20technical%20blueprint%20pattern%20of%20generator%20schematics%20and%20engineering%20lines%2C%20monochrome%2C%20subtle%20texture%20background&width=1920&height=1200&seq=jh-why-bg-01&orientation=landscape"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Why John Holt PLC"
          title="Reasons Businesses Trust Us"
          description="Our reputation is built on consistent delivery, technical capability, and genuine long-term partnership — wherever our clients operate."
          light
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <ReasonCard key={reason.title} reason={reason} delay={idx * 80} />
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-background-50/10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-background-300 text-center mb-6">
            Trusted by leading organisations across Nigeria and around the world
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {[1, 2, 3, 4, 5].map((slot) => (
              <div
                key={slot}
                className="h-14 px-5 flex items-center justify-center rounded-lg bg-background-50/95"
              >
                <img src={brandLogoUrl} alt="John Holt PLC" className="h-9 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ reason, delay }: { reason: (typeof reasons)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`bg-background-50/5 border border-background-50/10 rounded-2xl p-6 hover:bg-background-50/10 transition-colors ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <span className="w-11 h-11 rounded-xl bg-accent-500/20 text-accent-300 flex items-center justify-center">
        <i className={`${reason.icon} text-xl`}></i>
      </span>
      <h3 className="font-heading mt-4 text-base font-semibold text-background-50">{reason.title}</h3>
      <p className="mt-2 text-xs text-background-300 leading-relaxed">{reason.description}</p>
    </div>
  );
}