import { Link } from 'react-router-dom';
import BrandMark from '@/components/base/BrandMark';
import { useInView } from '@/hooks/useInView';
import { articles } from '@/mocks/news';

export default function FeaturedArticle() {
  const featured = articles[0];
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  const formattedDate = new Date(featured.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className="py-20 md:py-28 bg-background-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch ${
            inView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <Link
            to={`/news/${featured.slug}`}
            className="cursor-pointer relative rounded-3xl overflow-hidden h-[300px] lg:h-auto block group"
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/70 via-foreground-950/10 to-transparent"></div>
            <BrandMark variant="badge" />
            <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 text-xs font-semibold text-foreground-950 bg-accent-500 rounded-full px-3 py-1.5">
              <i className="ri-star-line"></i>
              Latest Story
            </span>
          </Link>

          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 text-xs text-foreground-500">
              <span className="text-accent-600 font-semibold uppercase tracking-wide">{featured.category}</span>
              <span>&middot;</span>
              <time dateTime={featured.date}>{formattedDate}</time>
              <span>&middot;</span>
              <span>{featured.readTime}</span>
            </div>

            <h2 className="font-heading mt-4 text-2xl md:text-4xl font-semibold text-foreground-950 leading-tight">
              {featured.title}
            </h2>
            <p className="mt-4 text-sm md:text-base text-foreground-600 leading-relaxed">{featured.excerpt}</p>

            <div className="mt-6 flex items-center gap-3">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <i className="ri-user-line"></i>
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground-900">{featured.author}</p>
                <p className="text-xs text-foreground-500">{featured.authorRole}</p>
              </div>
            </div>

            <Link
              to={`/news/${featured.slug}`}
              className="cursor-pointer mt-8 self-start whitespace-nowrap inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary-600 text-background-50 text-sm font-semibold hover:bg-primary-700 transition-colors"
            >
              Read the full story
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}