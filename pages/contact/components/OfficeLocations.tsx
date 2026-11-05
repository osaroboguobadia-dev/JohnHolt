import { useState } from 'react';
import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { offices } from '@/mocks/contact';

export default function OfficeLocations() {
  const [activeId, setActiveId] = useState(offices[0].id);
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const active = offices.find((o) => o.id === activeId) ?? offices[0];

  return (
    <section className="py-20 md:py-24 bg-background-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Our Offices"
          title="Find Us Across Nigeria"
          description="From our head office in Lagos to regional branches, we are positioned to serve clients nationwide."
        />

        <div ref={ref} className={`mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex flex-col gap-4">
            {offices.map((office) => {
              const isActive = office.id === activeId;
              return (
                <button
                  key={office.id}
                  type="button"
                  onClick={() => setActiveId(office.id)}
                  className={`cursor-pointer text-left rounded-2xl border p-5 md:p-6 transition-colors ${
                    isActive
                      ? 'border-primary-400 bg-primary-50'
                      : 'border-background-200 bg-background-100 hover:border-primary-300'
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-11 h-11 flex items-center justify-center rounded-xl ${
                          isActive ? 'bg-primary-600 text-background-50' : 'bg-background-50 text-primary-600'
                        }`}
                      >
                        <i className="ri-building-2-line text-lg"></i>
                      </span>
                      <div>
                        <h3 className="font-heading text-base font-semibold text-foreground-950">{office.city}</h3>
                        <span className="inline-flex items-center gap-1.5 text-xs text-foreground-600">
                          {office.isHeadquarters && <i className="ri-star-fill text-accent-500 text-xs"></i>}
                          {office.label}
                        </span>
                      </div>
                    </div>
                    <i
                      className={`ri-arrow-right-line text-lg transition-colors ${
                        isActive ? 'text-primary-600' : 'text-foreground-400'
                      }`}
                    ></i>
                  </div>

                  {isActive && (
                    <div className="mt-5 pt-5 border-t border-primary-200 flex flex-col gap-3">
                      <p className="flex items-start gap-2.5 text-sm text-foreground-700">
                        <i className="ri-map-pin-line mt-0.5 text-primary-600"></i>
                        <span>
                          {office.addressLines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </span>
                      </p>
                      <a
                        href={`tel:${office.phone.replace(/[^+\d]/g, '')}`}
                        className="flex items-center gap-2.5 text-sm text-foreground-700 hover:text-primary-700 transition-colors"
                      >
                        <i className="ri-phone-line text-primary-600"></i>
                        {office.phone}
                      </a>
                      <a
                        href={`mailto:${office.email}`}
                        className="flex items-center gap-2.5 text-sm text-foreground-700 hover:text-primary-700 transition-colors"
                      >
                        <i className="ri-mail-line text-primary-600"></i>
                        {office.email}
                      </a>
                      <p className="flex items-center gap-2.5 text-sm text-foreground-700">
                        <i className="ri-time-line text-primary-600"></i>
                        {office.hours}
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl overflow-hidden border border-background-200 min-h-[360px] lg:min-h-0">
            <iframe
              title={`Map of our ${active.city} office`}
              src={active.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}