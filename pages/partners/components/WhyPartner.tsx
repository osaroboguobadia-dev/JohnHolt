import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { partnerBenefits, type PartnerBenefit } from '@/mocks/partners';

export default function WhyPartner() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="py-20 md:py-28 bg-background-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why Partner With Us"
              title="Build With a Name People Trust"
              description="Partnering with John Holt PLC means more than a logo on a page — it means reach, support and a shared standard of doing things properly."
            />
            <div
              ref={ref}
              className={`mt-8 rounded-3xl overflow-hidden border border-background-200 ${
                inView ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              <div className="h-56 md:h-64">
                <img
                  src="https://readdy.ai/api/search-image?query=business%20professionals%20reviewing%20technical%20documents%20and%20equipment%20in%20a%20bright%20modern%20industrial%20meeting%20room%2C%20warm%20golden%20light%2C%20deep%20red%20and%20gold%20toned%20cinematic%20color%20grading%2C%20stylized%20editorial%20photograph%2C%20sense%20of%20collaboration%20and%20expertise&width=1000&height=700&seq=jh-partners-why-01&orientation=landscape"
                  alt="Partnership collaboration at John Holt PLC"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 md:p-7 bg-background-100">
                <p className="text-sm md:text-base text-foreground-700 leading-relaxed">
                  We look for partners who share our commitment to quality, safety and long-term relationships — and we
                  back them with the structure of an institution that has earned its reputation over decades.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {partnerBenefits.map((benefit, idx) => (
              <BenefitCard key={benefit.title} benefit={benefit} delay={idx * 70} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ benefit, delay }: { benefit: PartnerBenefit; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`bg-background-100 border border-background-200 rounded-2xl p-6 h-full hover:border-primary-300 transition-colors ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-50 text-primary-600">
        <i className={`${benefit.icon} text-xl`}></i>
      </span>
      <h3 className="font-heading mt-5 text-base font-semibold text-foreground-950 leading-snug">{benefit.title}</h3>
      <p className="mt-2.5 text-sm text-foreground-600 leading-relaxed">{benefit.description}</p>
    </div>
  );
}