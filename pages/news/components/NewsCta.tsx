import { useInView } from '@/hooks/useInView';
import NewsletterForm from '@/components/feature/NewsletterForm';

export default function NewsCta() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div
          ref={ref}
          className={`relative rounded-3xl overflow-hidden bg-primary-900 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <img
            src="https://readdy.ai/api/search-image?query=abstract%20warm%20dark%20red%20and%20gold%20gradient%20texture%20with%20subtle%20industrial%20engineering%20line%20patterns%2C%20minimal%20editorial%20background%2C%20cinematic%20mood%2C%20no%20text&width=1920&height=800&seq=jh-news-cta-01&orientation=landscape"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-top opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-foreground-950/90"></div>
          <div className="relative px-6 py-16 md:px-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-300">
                <span className="w-6 h-px bg-accent-300"></span>
                Never Miss an Update
              </span>
              <h2 className="font-heading mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-background-50 leading-tight">
                Insights Delivered to Your Inbox
              </h2>
              <p className="mt-4 text-sm md:text-base text-background-200 max-w-lg leading-relaxed">
                Subscribe for company news, project stories and practical guidance on power, fire safety and
                engineering — no noise, just useful updates.
              </p>
            </div>
            <div className="lg:justify-self-end w-full max-w-md">
              <NewsletterForm />
              <p className="mt-3 text-xs text-background-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}