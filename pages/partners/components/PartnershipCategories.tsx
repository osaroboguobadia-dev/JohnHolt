import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { partnershipCategories, type PartnershipCategory } from '@/mocks/partners';

export default function PartnershipCategories() {
  return (
    <section className="py-20 md:py-28 bg-background-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="How We Partner"
          title="Four Kinds of Partnership"
          description="Whether you make equipment, distribute it, service it or improve it with technology, there is a clear way to work with us."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {partnershipCategories.map((cat, idx) => (
            <CategoryCard key={cat.title} category={cat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category, index }: { category: PartnershipCategory; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${index * 80}ms` }}
      className={`bg-background-50 border border-background-200 rounded-3xl p-6 md:p-8 h-full hover:border-primary-300 transition-colors ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <div className="flex items-start gap-4">
        <span className="w-14 h-14 shrink-0 flex items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
          <i className={`${category.icon} text-2xl`}></i>
        </span>
        <div>
          <span className="block text-xs font-semibold tracking-[0.16em] uppercase text-secondary-600">
            {category.tagline}
          </span>
          <h3 className="font-heading mt-1.5 text-xl md:text-2xl font-semibold text-foreground-950 leading-tight">
            {category.title}
          </h3>
        </div>
      </div>
      <p className="mt-5 text-sm md:text-base text-foreground-600 leading-relaxed">{category.description}</p>
      <ul className="mt-6 flex flex-wrap gap-2.5">
        {category.highlights.map((item) => (
          <li
            key={item}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary-900 bg-secondary-100 rounded-full px-3 py-1.5"
          >
            <i className="ri-check-line text-secondary-600"></i>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}