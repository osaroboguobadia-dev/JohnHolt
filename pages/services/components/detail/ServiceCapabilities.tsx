import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import type { ServiceCapability, ServiceDetailData } from '@/mocks/serviceDetails';

export default function ServiceCapabilities({ detail }: { detail: ServiceDetailData }) {
  return (
    <section className="py-20 md:py-28 bg-background-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title={detail.capabilitiesHeading}
          description={detail.capabilitiesIntro}
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {detail.capabilities.map((cap, idx) => (
            <CapabilityCard key={cap.title} capability={cap} delay={idx * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ capability, delay }: { capability: ServiceCapability; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`group bg-background-50 border border-background-200 rounded-2xl p-6 md:p-7 h-full hover:border-primary-300 transition-colors ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent-100 text-accent-700">
          <i className={`${capability.icon} text-xl`}></i>
        </span>
        <span className="font-heading text-2xl font-semibold text-background-300">
          0{delay / 70 + 1}
        </span>
      </div>
      <h3 className="font-heading mt-5 text-base md:text-lg font-semibold text-foreground-950 leading-snug">
        {capability.title}
      </h3>
      <p className="mt-2.5 text-sm text-foreground-600 leading-relaxed">{capability.text}</p>
    </div>
  );
}