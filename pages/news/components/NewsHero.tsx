import { Link } from 'react-router-dom';
import BrandMark from '@/components/base/BrandMark';

export default function NewsHero() {
  return (
    <section className="relative h-[420px] md:h-[540px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://public.readdy.ai/ai/img_res/edited_cbdb269b09d1ca378211d6ca4c640263_063c3b49.jpg"
          alt="John Holt PLC news and insights"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/93 via-foreground-950/65 to-foreground-950/45"></div>
        <BrandMark />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-[1440px] px-4 md:px-8 pb-12 md:pb-20">
        <nav
          className="flex items-center gap-2 text-xs md:text-sm text-background-300 mb-5 animate-fade-up"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="cursor-pointer hover:text-accent-300 transition-colors">
            Home
          </Link>
          <i className="ri-arrow-right-s-line text-base"></i>
          <span className="text-background-100">News &amp; Insights</span>
        </nav>
        <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-300">
          <span className="w-6 h-px bg-accent-300"></span>
          Stay Informed
        </span>
        <h1 className="font-heading mt-4 text-4xl md:text-6xl font-semibold text-background-50 leading-[1.08] max-w-3xl animate-fade-up">
          News &amp; Insights
        </h1>
        <p className="mt-5 text-sm md:text-lg text-background-200 leading-relaxed max-w-2xl">
          Company announcements, project updates and practical insights from across power, fire safety and engineering —
          written to help you make better decisions.
        </p>
      </div>
    </section>
  );
}