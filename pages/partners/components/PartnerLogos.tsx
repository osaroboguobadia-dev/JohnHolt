import { useMemo, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/base/SectionHeading';
import { partners, partnerCategories, type Partner } from '@/mocks/partners';

export default function PartnerLogos() {
  const [active, setActive] = useState('All Partners');

  const counts = useMemo(() => {
    const map: Record<string, number> = { 'All Partners': partners.length };
    partnerCategories.forEach((cat) => {
      if (cat !== 'All Partners') {
        map[cat] = partners.filter((p) => p.category === cat).length;
      }
    });
    return map;
  }, []);

  const filtered = active === 'All Partners' ? partners : partners.filter((p) => p.category === active);

  return (
    <section id="partner-logos" className="py-20 md:py-28 bg-background-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Our Network"
          title="The Brands Behind Our Solutions"
          description="We work with trusted manufacturers, distributors and specialists who share our standards for quality, safety and reliability."
        />

        <div className="mt-10 flex flex-wrap gap-2.5">
          {partnerCategories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`cursor-pointer whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  isActive
                    ? 'bg-primary-600 text-background-50'
                    : 'bg-background-100 text-foreground-700 hover:bg-background-200'
                }`}
              >
                {cat}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-background-50/20 text-background-50' : 'bg-background-50 text-foreground-500'
                  }`}
                >
                  {counts[cat] ?? 0}
                </span>
              </button>
            );
          })}
        </div>

        <div key={active} className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {filtered.map((partner, idx) => (
            <PartnerCard key={partner.id} partner={partner} delay={idx * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ partner, delay }: { partner: Partner; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`group bg-background-50 border border-background-200 rounded-2xl p-5 md:p-6 flex flex-col items-center text-center hover:border-primary-300 transition-colors ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <span className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-background-100 border border-background-200 text-primary-700 font-heading text-xl md:text-2xl font-semibold group-hover:bg-primary-50 group-hover:border-primary-200 transition-colors">
        {partner.monogram}
      </span>
      <h3 className="font-heading mt-4 text-sm md:text-base font-semibold text-foreground-950 leading-snug">
        {partner.name}
      </h3>
      <span className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wide uppercase text-secondary-700">
        <i className={`${partner.icon} text-sm`}></i>
        {partner.category}
      </span>
      <p className="mt-3 text-xs md:text-sm text-foreground-600 leading-relaxed">{partner.description}</p>
      <span className="mt-4 text-[11px] text-foreground-400">Partner since {partner.since}</span>
    </div>
  );
}