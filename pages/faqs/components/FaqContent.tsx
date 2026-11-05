import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { faqGroups, type FaqGroup } from '@/mocks/faqs';

interface FaqContentProps {
  query: string;
  onClearSearch: () => void;
}

export default function FaqContent({ query, onClearSearch }: FaqContentProps) {
  const [activeCat, setActiveCat] = useState('all');
  const q = query.trim().toLowerCase();

  const matches = (question: string, answer: string) =>
    !q || question.toLowerCase().includes(q) || answer.toLowerCase().includes(q);

  const sidebar = useMemo(
    () =>
      faqGroups.map((g) => ({
        id: g.id,
        category: g.category,
        icon: g.icon,
        count: g.faqs.filter((f) => matches(f.question, f.answer)).length,
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [q]
  );

  const totalMatches = sidebar.reduce((sum, g) => sum + g.count, 0);

  const visibleGroups = faqGroups
    .filter((g) => activeCat === 'all' || g.id === activeCat)
    .map((g) => ({ ...g, faqs: g.faqs.filter((f) => matches(f.question, f.answer)) }))
    .filter((g) => g.faqs.length > 0);

  const handleReset = () => {
    onClearSearch();
    setActiveCat('all');
  };

  return (
    <section className="py-20 md:py-24 bg-background-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 grid grid-cols-1 lg:grid-cols-[minmax(0,300px)_1fr] gap-10 lg:gap-14 items-start">
        <aside className="lg:sticky lg:top-32">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground-500 mb-4">Browse by Category</p>
          <nav className="flex lg:flex-col flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCat('all')}
              className={`cursor-pointer w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                activeCat === 'all'
                  ? 'bg-primary-600 text-background-50'
                  : 'bg-background-100 text-foreground-700 hover:bg-background-200'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <i className="ri-layout-grid-line text-base"></i>
                All Questions
              </span>
              <span className="text-xs">{totalMatches}</span>
            </button>
            {sidebar.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setActiveCat(g.id)}
                className={`cursor-pointer w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left transition-colors ${
                  activeCat === g.id
                    ? 'bg-primary-600 text-background-50'
                    : 'bg-background-100 text-foreground-700 hover:bg-background-200'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <i className={`${g.icon} text-base`}></i>
                  <span className="leading-snug">{g.category}</span>
                </span>
                <span className="text-xs shrink-0">{g.count}</span>
              </button>
            ))}
          </nav>

          <div className="mt-6 bg-background-100 border border-background-200 rounded-2xl p-6">
            <span className="w-11 h-11 flex items-center justify-center rounded-xl bg-accent-50 text-accent-600">
              <i className="ri-question-answer-line text-xl"></i>
            </span>
            <p className="font-heading mt-4 text-base font-semibold text-foreground-950">Still need an answer?</p>
            <p className="mt-2 text-sm text-foreground-600 leading-relaxed">
              Our team is happy to help with anything you couldn&apos;t find here.
            </p>
            <Link
              to="/contact"
              className="cursor-pointer mt-5 whitespace-nowrap inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 text-background-50 text-sm font-semibold hover:bg-primary-700 transition-colors"
            >
              Contact Us
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </aside>

        <div>
          {q && (
            <p className="mb-6 text-sm text-foreground-600">
              {totalMatches > 0 ? (
                <>
                  <strong className="text-foreground-900">{totalMatches}</strong>{' '}
                  {totalMatches === 1 ? 'answer matches' : 'answers match'} &ldquo;{query.trim()}&rdquo;
                </>
              ) : (
                <>No answers match &ldquo;{query.trim()}&rdquo;</>
              )}
            </p>
          )}

          {visibleGroups.length > 0 ? (
            <div className="flex flex-col gap-10">
              {visibleGroups.map((group) => (
                <FaqGroupBlock key={group.id} group={group} />
              ))}
            </div>
          ) : (
            <div className="bg-background-100 border border-background-200 rounded-3xl p-10 md:p-14 text-center">
              <span className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-background-50 text-foreground-400">
                <i className="ri-search-eye-line text-2xl"></i>
              </span>
              <h3 className="font-heading mt-5 text-xl font-semibold text-foreground-950">No matching questions</h3>
              <p className="mt-2 text-sm text-foreground-600 max-w-md mx-auto">
                We couldn&apos;t find an answer matching your search. Try a different term, or reach out and we&apos;ll
                answer you directly.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="cursor-pointer mt-6 whitespace-nowrap inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 text-background-50 text-sm font-semibold hover:bg-primary-700 transition-colors"
              >
                <i className="ri-refresh-line"></i>
                Reset Search
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FaqGroupBlock({ group }: { group: FaqGroup }) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const { ref, inView } = useInView<HTMLDivElement>(0.08);

  return (
    <div ref={ref} className={inView ? 'animate-fade-up' : 'opacity-0'}>
      <div className="flex items-center gap-3.5 mb-5">
        <span className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-primary-50 text-primary-600">
          <i className={`${group.icon} text-xl`}></i>
        </span>
        <div>
          <h2 className="font-heading text-lg md:text-xl font-semibold text-foreground-950">{group.category}</h2>
          <p className="text-xs md:text-sm text-foreground-500 leading-snug">{group.description}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {group.faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.question}
              className={`border rounded-2xl overflow-hidden transition-colors ${
                isOpen ? 'border-primary-300 bg-background-50' : 'border-background-200 bg-background-50'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                aria-expanded={isOpen}
                className="cursor-pointer w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-5"
              >
                <span className="font-heading text-sm md:text-base font-semibold text-foreground-950">
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 shrink-0 flex items-center justify-center rounded-full transition-colors ${
                    isOpen ? 'bg-primary-600 text-background-50' : 'bg-primary-50 text-primary-600'
                  }`}
                >
                  <i className={`${isOpen ? 'ri-subtract-line' : 'ri-add-line'} text-lg`}></i>
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 md:px-6 pb-5 text-sm text-foreground-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}