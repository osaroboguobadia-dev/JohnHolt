import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { LegalDoc } from '@/mocks/legal';
import { legalDocs } from '@/mocks/legal';
import ClosingCta from '@/pages/home/components/ClosingCta';

export default function LegalLayout({ doc }: { doc: LegalDoc }) {
  const [activeId, setActiveId] = useState(doc.sections[0]?.id ?? '');
  const related = legalDocs.filter((d) => d.slug !== doc.slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-140px 0px -65% 0px', threshold: 0 }
    );

    doc.sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [doc]);

  return (
    <>
      <section className="relative h-[320px] md:h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=elegant%20minimal%20abstract%20background%20of%20soft%20folded%20paper%20texture%20in%20warm%20ivory%20and%20deep%20red%20tones%2C%20subtle%20golden%20light%2C%20sophisticated%20editorial%20still%20life%2C%20clean%20and%20professional%20legal%20document%20mood&width=1920&height=800&seq=jh-legal-hero-01&orientation=landscape"
            alt={doc.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/93 via-foreground-950/70 to-foreground-950/50"></div>
        </div>

        <div className="relative z-10 w-full mx-auto max-w-[1440px] px-4 md:px-8 pb-10 md:pb-14">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-background-300 mb-5" aria-label="Breadcrumb">
            <Link to="/" className="cursor-pointer hover:text-accent-300 transition-colors">
              Home
            </Link>
            <i className="ri-arrow-right-s-line text-base"></i>
            <span className="text-background-100">{doc.title}</span>
          </nav>
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-300">
            <span className="w-6 h-px bg-accent-300"></span>
            {doc.eyebrow}
          </span>
          <h1 className="font-heading mt-4 text-3xl md:text-5xl font-semibold text-background-50 leading-[1.1] max-w-3xl">
            {doc.title}
          </h1>
          <p className="mt-4 text-sm md:text-base text-background-200 leading-relaxed max-w-2xl">{doc.description}</p>
          <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-background-300">
            <i className="ri-refresh-line text-accent-300"></i>
            Last updated: {doc.updated}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background-50">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-14">
            <aside className="lg:sticky lg:top-24 self-start">
              <div className="bg-background-100 border border-background-200 rounded-2xl p-5">
                <h2 className="font-heading text-sm font-semibold text-foreground-950 uppercase tracking-wide flex items-center gap-2">
                  <i className="ri-list-check-2 text-primary-600"></i>
                  On This Page
                </h2>
                <nav className="mt-4 flex flex-col gap-1 max-h-[60vh] overflow-y-auto no-scrollbar">
                  {doc.sections.map((section) => {
                    const isActive = section.id === activeId;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`cursor-pointer text-sm rounded-lg px-3 py-2 transition-colors leading-snug ${
                          isActive
                            ? 'bg-primary-50 text-primary-700 font-semibold'
                            : 'text-foreground-600 hover:bg-background-200 hover:text-foreground-900'
                        }`}
                      >
                        {section.heading}
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="mt-5 bg-background-100 border border-background-200 rounded-2xl p-5">
                <h2 className="font-heading text-sm font-semibold text-foreground-950 uppercase tracking-wide flex items-center gap-2">
                  <i className="ri-links-line text-primary-600"></i>
                  Other Policies
                </h2>
                <nav className="mt-3 flex flex-col gap-1">
                  {related.map((d) => (
                    <Link
                      key={d.slug}
                      to={`/${d.slug}`}
                      className="cursor-pointer inline-flex items-center gap-2 text-sm text-foreground-600 hover:text-primary-700 transition-colors px-3 py-2 rounded-lg hover:bg-background-200"
                    >
                      <i className="ri-file-text-line"></i>
                      {d.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="max-w-3xl">
              <div className="bg-background-100 border-l-4 border-accent-500 rounded-r-2xl px-6 py-5 md:px-7 md:py-6">
                <p className="text-sm md:text-base text-foreground-700 leading-relaxed">{doc.intro}</p>
              </div>

              <div className="mt-10 flex flex-col gap-10">
                {doc.sections.map((section) => (
                  <article key={section.id} id={section.id} className="scroll-mt-28">
                    <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground-950 leading-snug">
                      {section.heading}
                    </h2>
                    <div className="mt-4 flex flex-col gap-4">
                      {section.blocks.map((block, idx) => {
                        if (block.type === 'list') {
                          return (
                            <ul key={idx} className="flex flex-col gap-3">
                              {block.items.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-3 text-sm md:text-base text-foreground-700 leading-relaxed"
                                >
                                  <i className="ri-checkbox-blank-circle-fill text-primary-400 text-[7px] mt-2.5 shrink-0"></i>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        return (
                          <p key={idx} className="text-sm md:text-base text-foreground-700 leading-[1.85]">
                            {block.text}
                          </p>
                        );
                      })}
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 bg-background-100 border border-background-200 rounded-2xl p-6 md:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground-950">
                    Questions about this {doc.title}?
                  </h3>
                  <p className="mt-1.5 text-sm text-foreground-600 leading-relaxed">
                    Our team is happy to clarify anything you are unsure about.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary-600 text-background-50 text-sm font-semibold hover:bg-primary-700 transition-colors shrink-0"
                >
                  Contact Us
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}