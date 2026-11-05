import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { projectOutcomes } from '@/mocks/projects';

export default function ProjectOutcomes() {
  return (
    <section className="py-20 md:py-28 bg-background-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="How We Deliver"
          title="Standards You Can Hold Us To"
          description="However large or small the project, the same discipline applies — every single time."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {projectOutcomes.map((outcome, idx) => (
            <OutcomeCard key={outcome.title} outcome={outcome} delay={idx * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomeCard({ outcome, delay }: { outcome: (typeof projectOutcomes)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`bg-background-50 border border-background-200 rounded-2xl p-6 h-full hover:border-primary-300 transition-colors ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-50 text-primary-600">
        <i className={`${outcome.icon} text-xl`}></i>
      </span>
      <h3 className="font-heading mt-5 text-base font-semibold text-foreground-950 leading-snug">{outcome.title}</h3>
      <p className="mt-2.5 text-sm text-foreground-600 leading-relaxed">{outcome.text}</p>
    </div>
  );
}