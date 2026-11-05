import { useState } from 'react';
import SectionHeading from '@/components/base/SectionHeading';
import { testimonials } from '@/mocks/home';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  const go = (dir: 1 | -1) => {
    setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading eyebrow="Client Voices" title="What Our Clients Say" align="center" />

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-background-100 rounded-2xl border border-background-200 p-8 md:p-12 text-center relative">
            <i className="ri-double-quotes-l text-4xl text-accent-400"></i>
            <p className="font-heading text-lg md:text-2xl text-foreground-900 leading-relaxed mt-4">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-12 h-12 rounded-full object-cover object-top"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground-900">{current.name}</p>
                <p className="text-xs text-foreground-500">
                  {current.role}, {current.company}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="cursor-pointer w-10 h-10 rounded-full border border-background-300 flex items-center justify-center text-foreground-600 hover:bg-background-100 transition-colors"
            >
              <i className="ri-arrow-left-line"></i>
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((t, idx) => (
                <button
                  key={t.name}
                  onClick={() => setActive(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`cursor-pointer w-2 h-2 rounded-full transition-all ${
                    idx === active ? 'bg-primary-600 w-6' : 'bg-background-300'
                  }`}
                ></button>
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="cursor-pointer w-10 h-10 rounded-full border border-background-300 flex items-center justify-center text-foreground-600 hover:bg-background-100 transition-colors"
            >
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}