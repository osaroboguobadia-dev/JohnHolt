import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { aboutMilestones } from '@/mocks/about';

export default function Timeline() {
  return (
    <section className="py-20 md:py-28 bg-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
        <img
          src="https://readdy.ai/api/search-image?query=abstract%20minimal%20texture%20of%20engineering%20blueprint%20lines%20and%20fine%20technical%20patterns%2C%20monochrome%20warm%20tone%2C%20subtle%20background&width=1920&height=1200&seq=jh-about-tl-bg-01&orientation=landscape&nocache=true"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Our Journey"
          title="Milestones That Shaped Us"
          description="John Holt PLC Brings Over a Century of Heritage"
          align="center"
          light
        />

        <div className="relative mt-14">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-background-50/15 md:-translate-x-1/2"></div>
          <div className="flex flex-col gap-8 md:gap-6">
            {aboutMilestones.map((milestone, idx) => (
              <MilestoneRow key={milestone.year} milestone={milestone} align={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 60} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneRow({
  milestone,
  align,
  delay,
}: {
  milestone: (typeof aboutMilestones)[number];
  align: 'left' | 'right';
  delay: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <div ref={ref} className={`relative md:grid md:grid-cols-2 ${inView ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: `${delay}ms` }}>
      <span className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-500 ring-4 ring-primary-900"></span>
      <div
        className={`pl-12 md:pl-0 ${
          align === 'left' ? 'md:col-start-1 md:pr-14 md:text-right' : 'md:col-start-2 md:pl-14'
        }`}
      >
        <span className="font-heading text-2xl md:text-3xl font-semibold text-accent-300">{milestone.year}</span>
        <h3 className="font-heading mt-1.5 text-base md:text-lg font-semibold text-background-50">{milestone.title}</h3>
        <p className="mt-2 text-sm text-background-300 leading-relaxed md:max-w-sm md:inline-block">{milestone.description}</p>
      </div>
    </div>
  );
}