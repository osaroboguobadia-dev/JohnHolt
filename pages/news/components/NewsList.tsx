import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { articleCategories, articles, type Article } from '@/mocks/news';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function NewsList() {
  const [active, setActive] = useState<string>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      const matchesCategory = active === 'All' || a.category === active;
      const matchesQuery =
        !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [active, query]);

  return (
    <section id="news-archive" className="py-20 md:py-28 bg-background-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="The Archive"
            title="Stories, Updates &amp; Advice"
            description="Browse every article we have published — filter by topic or search for something specific."
          />

          <div className="relative w-full lg:w-72 shrink-0">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-foreground-400 text-base"></i>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              aria-label="Search articles"
              className="w-full pl-11 pr-4 py-3 rounded-full bg-background-50 border border-background-200 text-sm text-foreground-800 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300"
            />
          </div>
        </div>

        <div className="mt-9 flex flex-wrap gap-2.5">
          {articleCategories.map((category) => {
            const isActive = active === category;
            const count =
              category === 'All'
                ? articles.length
                : articles.filter((a) => a.category === category).length;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={isActive}
                className={`cursor-pointer whitespace-nowrap inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-primary-600 text-background-50'
                    : 'bg-background-50 border border-background-200 text-foreground-700 hover:border-primary-300'
                }`}
              >
                {category}
                <span
                  className={`text-[11px] font-semibold rounded-full px-1.5 py-0.5 ${
                    isActive ? 'bg-background-50/20 text-background-50' : 'bg-background-200 text-foreground-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {filtered.length > 0 ? (
          <div key={`${active}-${query}`} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, idx) => (
              <ArticleCard key={article.slug} article={article} delay={idx * 60} />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center py-16 bg-background-50 rounded-2xl border border-background-200">
            <span className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-background-100 text-foreground-400">
              <i className="ri-file-search-line text-2xl"></i>
            </span>
            <p className="font-heading mt-4 text-lg font-semibold text-foreground-900">No articles found</p>
            <p className="mt-1.5 text-sm text-foreground-500">Try a different topic or clear your search.</p>
            <button
              type="button"
              onClick={() => {
                setActive('All');
                setQuery('');
              }}
              className="cursor-pointer mt-5 whitespace-nowrap inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 text-background-50 text-sm font-semibold hover:bg-primary-700 transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ArticleCard({ article, delay }: { article: Article; delay: number }) {
  const { ref, inView } = useInView<HTMLElement>(0.1);
  return (
    <article
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`group bg-background-50 border border-background-200 rounded-2xl overflow-hidden hover:border-primary-300 transition-colors flex flex-col ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <Link to={`/news/${article.slug}`} className="cursor-pointer block h-48 overflow-hidden relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 text-[11px] font-semibold tracking-wide uppercase text-foreground-950 bg-accent-500 rounded-full px-3 py-1">
          {article.category}
        </span>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-foreground-500">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span>&middot;</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="font-heading mt-3 text-base md:text-lg font-semibold text-foreground-950 leading-snug">
          <Link to={`/news/${article.slug}`} className="cursor-pointer hover:text-primary-700 transition-colors">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2.5 text-sm text-foreground-600 leading-relaxed flex-1 line-clamp-3">{article.excerpt}</p>
        <Link
          to={`/news/${article.slug}`}
          className="cursor-pointer mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
        >
          Read article
          <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
        </Link>
      </div>
    </article>
  );
}