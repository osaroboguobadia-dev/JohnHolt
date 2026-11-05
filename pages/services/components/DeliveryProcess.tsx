import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { deliveryProcess } from '@/mocks/services';

export default function DeliveryProcess() {
  return (
    <section className="py-20 md:py-28 bg-background-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="From First Call to Lifelong Support"
          description="A clear, disciplined process that keeps every project on specification, on time and built to last."
          align="center"
        />

        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-[34px] left-[12%] right-[12%] h-px bg-background-300" aria-hidden="true"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {deliveryProcess.map((step, idx) => (
              <ProcessStepCard key={step.step} step={step} delay={idx * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStepCard({ step, delay }: { step: (typeof deliveryProcess)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`relative text-center lg:text-left ${inView ? 'animate-fade-up' : 'opacity-0'}`}
    >
      <div className="flex justify-center lg:justify-start">
        <span className="relative z-10 w-[68px] h-[68px] flex items-center justify-center rounded-2xl bg-primary-600 text-background-50 border-4 border-background-100">
          <i className={`${step.icon} text-2xl`}></i>
        </span>
      </div>
      <p className="mt-5 text-xs font-semibold tracking-[0.2em] uppercase text-accent-600">Step {step.step}</p>
      <h3 className="font-heading mt-2 text-lg font-semibold text-foreground-950">{step.title}</h3>
      <p className="mt-2 text-sm text-foreground-600 leading-relaxed">{step.description}</p>
    </div>
  );
}