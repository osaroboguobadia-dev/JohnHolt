import { Link } from 'react-router-dom';
import BrandMark from '@/components/base/BrandMark';
import type { Article } from '@/mocks/news';

export default function ArticleHero({ article }: { article: Article }) {
  const formattedDate = new Date(article.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className="relative bg-foreground-950 pt-28 md:pt-36 pb-0 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-8">
        <nav
          className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-background-300 mb-6 animate-fade-up"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="cursor-pointer hover:text-accent-300 transition-colors">
            Home
          </Link>
          <i className="ri-arrow-right-s-line text-base"></i>
          <Link to="/news" className="cursor-pointer hover:text-accent-300 transition-colors">
            News &amp; Insights
          </Link>
          <i className="ri-arrow-right-s-line text-base"></i>
          <span className="text-background-100 line-clamp-1 max-w-[240px] md:max-w-none">{article.title}</span>
        </nav>

        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-foreground-950 bg-accent-500 rounded-full px-3 py-1.5">
            <i className="ri-price-tag-3-line"></i>
            {article.category}
          </span>
          <h1 className="font-heading mt-5 text-3xl md:text-5xl font-semibold text-background-50 leading-[1.12] animate-fade-up">
            {article.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs md:text-sm text-background-300">
            <span className="flex items-center gap-2">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-background-50/10 border border-background-50/20 text-background-100">
                <i className="ri-user-line"></i>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-background-100 font-semibold">{article.author}</span>
                <span className="text-background-400 text-[11px]">{article.authorRole}</span>
              </span>
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-calendar-line text-accent-300"></i>
              <time dateTime={article.date}>{formattedDate}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-time-line text-accent-300"></i>
              {article.readTime}
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-8 mt-10 md:mt-12">
        <div className="relative rounded-t-3xl overflow-hidden h-[260px] md:h-[460px]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover object-top"
          />
          <BrandMark variant="badge" />
        </div>
      </div>
    </section>
  );
}