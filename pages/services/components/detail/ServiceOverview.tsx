import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import type { ServiceDetailData, ServiceStrength } from '@/mocks/serviceDetails';

export default function ServiceOverview({ detail }: { detail: ServiceDetailData }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <>
      <section className="py-20 md:py-28 bg-background-50">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            ref={ref}
            className={`relative order-2 lg:order-1 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <div className="relative rounded-3xl overflow-hidden h-[340px] md:h-[460px]">
              <img
                src={detail.overviewImage}
                alt={`${detail.shortName} at John Holt PLC`}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="hidden md:flex absolute -bottom-6 -right-6 items-center gap-3 bg-primary-600 text-background-50 rounded-2xl px-6 py-5">
              <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-background-50/15">
                <i className={`${detail.icon} text-2xl`}></i>
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.15em] text-background-200">John Holt PLC</span>
                <span className="block font-heading text-base font-semibold">{detail.shortName}</span>
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="Overview" title={detail.overviewHeading} />
            <div className="mt-6 flex flex-col gap-4">
              {detail.overviewParagraphs.map((para) => (
                <p key={para} className="text-sm md:text-base text-foreground-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background-100">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          <SectionHeading
            eyebrow="The Difference"
            title={detail.strengthsHeading}
            description={detail.strengthsIntro}
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {detail.strengths.map((s, idx) => (
              <StrengthCard key={s.title} strength={s} delay={idx * 80} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function StrengthCard({ strength, delay }: { strength: ServiceStrength; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`bg-background-50 border border-background-200 rounded-2xl p-6 h-full ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-50 text-primary-600">
        <i className={`${strength.icon} text-xl`}></i>
      </span>
      <h3 className="font-heading mt-5 text-base font-semibold text-foreground-950 leading-snug">
        {strength.title}
      </h3>
      <p className="mt-2.5 text-sm text-foreground-600 leading-relaxed">{strength.text}</p>
    </div>
  );
}