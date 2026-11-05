import SectionHeading from '@/components/base/SectionHeading';
import BrandMark from '@/components/base/BrandMark';
import { useInView } from '@/hooks/useInView';
import { careerBenefits } from '@/mocks/careers';

export default function WhyWorkWithUs() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="py-20 md:py-28 bg-background-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Why Work With Us"
          title="A Place Where Good People Do Great Work"
          description="We invest in our people because dependable solutions are built by capable, supported teams."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {careerBenefits.map((benefit, idx) => (
            <BenefitCard key={benefit.title} benefit={benefit} delay={idx * 70} />
          ))}
        </div>

        <div
          ref={ref}
          className={`mt-12 rounded-3xl overflow-hidden border border-background-200 bg-background-50 ${
            inView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://public.readdy.ai/ai/img_res/edited_1bf06e96aa3d5901a0af9a8bf955b866_433e4a5f.jpg"
                alt="Life at John Holt PLC — staff in John Holt branded workwear"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/78 via-primary-900/28 to-primary-700/5"></div>
              <BrandMark variant="overlay" logoClassName="h-9 md:h-11" className="pt-6 md:pt-8" />
            </div>
            <div className="p-7 md:p-10 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-600">
                <span className="w-6 h-px bg-accent-600"></span>
                Our Culture
              </span>
              <h3 className="font-heading mt-4 text-2xl md:text-3xl font-semibold text-foreground-950 leading-tight">
                Heritage That Values People
              </h3>
              <p className="mt-4 text-sm md:text-base text-foreground-600 leading-relaxed">
                For generations, John Holt PLC has been built on the skill, integrity and dedication of its people. We
                believe in doing the job properly, looking after one another and giving every team member the room to
                grow.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Mentorship from experienced engineers and specialists',
                  'Training that keeps your skills sharp and relevant',
                  'A safe, respectful and inclusive working environment',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground-700 leading-snug">
                    <i className="ri-check-line text-primary-600 mt-0.5 shrink-0"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  benefit,
  delay,
}: {
  benefit: (typeof careerBenefits)[number];
  delay: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`group bg-background-50 border border-background-200 rounded-2xl overflow-hidden h-full hover:border-primary-400 hover:shadow-lg hover:shadow-primary-900/10 transition-all duration-300 ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <div className="relative w-full h-44 md:h-48 overflow-hidden">
        <img
          src={benefit.image}
          alt={benefit.imageAlt}
          title={`${benefit.title} — careers at John Holt PLC`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-800/30 to-primary-700/5"></div>
        <BrandMark variant="overlay" />
        <span className="absolute bottom-3 left-3 w-11 h-11 flex items-center justify-center rounded-xl bg-primary-600 text-background-50 shadow-md ring-2 ring-background-50/70">
          <i className={`${benefit.icon} text-lg`}></i>
        </span>
        <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary-600"></span>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-base font-semibold text-foreground-950 leading-snug transition-colors group-hover:text-primary-700">
          {benefit.title}
        </h3>
        <p className="mt-2.5 text-sm text-foreground-600 leading-relaxed">{benefit.description}</p>
        <span className="mt-4 block h-0.5 w-10 rounded-full bg-primary-300 transition-all duration-300 group-hover:w-16 group-hover:bg-primary-600"></span>
      </div>
    </div>
  );
}