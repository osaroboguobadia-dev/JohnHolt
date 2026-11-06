import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';

export default function ServicesCta() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section className="py-20 md:py-28 bg-background-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div ref={ref} className={`relative rounded-3xl overflow-hidden ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <img
            src={`${import.meta.env.BASE_URL}images/5dd5394b6929a2d4.jpg`}
            alt="John Holt PLC engineering workshop"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/92 via-primary-800/85 to-foreground-950/80"></div>
          <div className="relative px-6 py-16 md:py-20 md:px-16 text-center">
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-300">
              <span className="w-6 h-px bg-accent-300"></span>
              Let&apos;s Get Started
              <span className="w-6 h-px bg-accent-300"></span>
            </span>
            <h2 className="font-heading mt-4 text-3xl md:text-5xl font-semibold text-background-50 max-w-2xl mx-auto leading-tight">
              Tell Us What You Need — We&apos;ll Handle the Rest
            </h2>
            <p className="mt-4 text-sm md:text-base text-background-200 max-w-xl mx-auto">
              From a single generator service to a full fire safety installation, our team is ready to scope, supply and
              support the right solution for your business.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-accent-500 text-foreground-950 text-sm font-semibold hover:bg-accent-600 transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href="tel:070056464658"
                className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-background-50/10 border border-background-50/30 text-background-50 text-sm font-semibold hover:bg-background-50/20 transition-colors flex items-center gap-2"
              >
                <i className="ri-phone-line"></i>
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}