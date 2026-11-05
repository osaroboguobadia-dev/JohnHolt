import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { aboutLeadership } from '@/mocks/about';

export default function Leadership() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Our People"
          title="Leadership You Can Rely On"
          description="Experienced professionals guiding John Holt PLC with technical depth, integrity and a long-term view."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutLeadership.map((leader, idx) => (
            <LeaderCard key={leader.name} leader={leader} delay={idx * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LeaderCard({ leader, delay }: { leader: (typeof aboutLeadership)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`bg-background-100 rounded-2xl border border-background-200 overflow-hidden text-center ${inView ? 'animate-fade-up' : 'opacity-0'}`}
    >
      <div className="w-full aspect-[4/5] bg-foreground-950 flex items-center justify-center overflow-hidden">
        <img
          src={leader.image}
          alt={leader.name}
          title={`${leader.name} — ${leader.role}`}
          className={`w-full h-full ${leader.imageFit === 'cover' ? 'object-cover object-top' : 'object-contain'}`}
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-base font-semibold text-foreground-950">{leader.name}</h3>
        <p className="mt-1 text-xs text-accent-700 font-semibold">{leader.role}</p>
      </div>
    </div>
  );
}