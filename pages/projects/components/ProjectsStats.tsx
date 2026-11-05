import AnimatedCounter from '@/components/base/AnimatedCounter';
import { projectStats } from '@/mocks/projects';

export default function ProjectsStats() {
  return (
    <section className="relative -mt-16 md:-mt-20 z-20">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="bg-background-50 rounded-2xl border border-background-200 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-background-200">
          {projectStats.map((stat) => (
            <div key={stat.label} className="px-5 py-7 md:py-9 text-center">
              <p className="font-heading text-3xl md:text-4xl font-semibold text-primary-700">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs md:text-sm text-foreground-500 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}