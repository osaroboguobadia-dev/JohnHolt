import { Link } from 'react-router-dom';
import BrandMark from '@/components/base/BrandMark';

export default function ContactHero() {
  return (
    <section className="relative h-[440px] md:h-[580px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://public.readdy.ai/ai/img_res/edited_ddbf7644cea05ba833020e0c7b7a3452_aaae34a8.jpg"
          alt="John Holt PLC reception area with branded John Holt signage"
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
          <span className="text-background-100">Contact</span>
        </nav>
        <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-300">
          <span className="w-6 h-px bg-accent-300"></span>
          Get in Touch
        </span>
        <h1 className="font-heading mt-4 text-4xl md:text-6xl font-semibold text-background-50 leading-[1.08] max-w-3xl animate-fade-up">
          Let&rsquo;s Talk About Your Next Project
        </h1>
        <p className="mt-5 text-sm md:text-lg text-background-200 leading-relaxed max-w-2xl">
          Whether you need a quote, technical advice or support for an existing installation, our team is ready to help.
          Reach us by phone, email or the enquiry form below.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#enquiry-form"
            className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-accent-500 text-foreground-950 text-sm font-semibold hover:bg-accent-600 transition-colors flex items-center gap-2"
          >
            Send an Enquiry
            <i className="ri-arrow-down-line"></i>
          </a>
          <a
            href="tel:070056464658"
            className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-background-50/10 border border-background-50/30 text-background-50 text-sm font-semibold hover:bg-background-50/20 transition-colors flex items-center gap-2"
          >
            <i className="ri-phone-line"></i>
            Call 0700 5646 4658
          </a>
        </div>
      </div>
    </section>
  );
}