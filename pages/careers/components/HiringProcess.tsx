import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { hiringSteps } from '@/mocks/careers';

export default function HiringProcess() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="py-20 md:py-28 bg-background-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Our Hiring Process"
          description="A clear, respectful process designed to help you show your best and get to know us too."
          align="center"
        />

        <div ref={ref} className={`mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          {hiringSteps.map((step, idx) => (
            <div key={step.step} className="relative">
              <div className="bg-background-50 border border-background-200 rounded-2xl p-6 h-full">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-600 text-background-50">
                    <i className={`${step.icon} text-xl`}></i>
                  </span>
                  <span className="font-heading text-3xl font-semibold text-background-300">{step.step}</span>
                </div>
                <h3 className="font-heading mt-5 text-base font-semibold text-foreground-950">{step.title}</h3>
                <p className="mt-2 text-sm text-foreground-600 leading-relaxed">{step.description}</p>
              </div>
              {idx < hiringSteps.length - 1 && (
                <i className="hidden lg:flex ri-arrow-right-line absolute top-1/2 -right-3 -translate-y-1/2 text-background-400 text-xl"></i>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}