import { Link } from 'react-router-dom';
import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { getRelatedArticles } from '@/mocks/news';

export default function RelatedArticles({ slug }: { slug: string }) {
  const related = getRelatedArticles(slug);
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  if (related.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-background-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading eyebrow="Keep Reading" title="Related Articles" />
        <div
          ref={ref}
          className={`mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${
            inView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {related.map((article) => {
            const formattedDate = new Date(article.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            });
            return (
              <Link
                key={article.slug}
                to={`/news/${article.slug}`}
                className="cursor-pointer group bg-background-50 border border-background-200 rounded-2xl overflow-hidden hover:border-primary-300 transition-colors flex flex-col"
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[11px] font-semibold tracking-wide uppercase text-foreground-950 bg-accent-500 rounded-full px-2.5 py-1">
                    {article.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs text-foreground-500">{formattedDate}</p>
                  <h3 className="font-heading mt-2 text-base font-semibold text-foreground-950 leading-snug">
                    {article.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 group-hover:text-primary-800">
                    Read article
                    <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}