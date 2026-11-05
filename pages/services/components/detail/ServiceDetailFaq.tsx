import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import type { ServiceDetailData } from '@/mocks/serviceDetails';

export default function ServiceDetailFaq({ detail }: { detail: ServiceDetailData }) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <section className="py-20 md:py-28 bg-background-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_1fr] gap-12 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-32">
          <SectionHeading
            eyebrow="Good to Know"
            title={`${detail.shortName} — FAQ`}
            description={`Common questions clients ask about our ${detail.shortName.toLowerCase()} solutions.`}
          />
          <div className="mt-7 bg-background-50 border border-background-200 rounded-2xl p-6">
            <p className="font-heading text-base font-semibold text-foreground-950">Need a tailored answer?</p>
            <p className="mt-2 text-sm text-foreground-600 leading-relaxed">
              Talk to our team and we&apos;ll help scope the right solution for your project.
            </p>
            <Link
              to="/contact"
              className="cursor-pointer mt-5 whitespace-nowrap inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 text-background-50 text-sm font-semibold hover:bg-primary-700 transition-colors"
            >
              Contact Us
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>

        <div ref={ref} className={`flex flex-col gap-3 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          {detail.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question} className="bg-background-50 border border-background-200 rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  className="cursor-pointer w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-5"
                >
                  <span className="font-heading text-base font-semibold text-foreground-950">{faq.question}</span>
                  <span className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full bg-primary-50 text-primary-600">
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
    </section>
  );
}