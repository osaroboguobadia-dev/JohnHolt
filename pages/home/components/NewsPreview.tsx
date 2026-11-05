import { Link } from 'react-router-dom';
import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { newsItems } from '@/mocks/home';

export default function NewsPreview() {
  return (
    <section className="py-20 md:py-28 bg-background-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Insights"
            title="Latest News &amp; Insights"
            description="Updates, announcements and practical insights from across our global business."
          />
          <Link
            to="/news"
            className="cursor-pointer whitespace-nowrap inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800"
          >
            View all news
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, idx) => (
            <NewsCard key={item.slug} item={item} delay={idx * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsCard({ item, delay }: { item: (typeof newsItems)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLAnchorElement>(0.2);
  const formattedDate = new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <Link
      ref={ref}
      to={`/news/${item.slug}`}
      style={{ animationDelay: `${delay}ms` }}
      className={`cursor-pointer group block bg-background-50 rounded-2xl border border-background-200 overflow-hidden hover:border-primary-300 transition-colors ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <div className="h-44 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-foreground-500">
          <span className="text-accent-600 font-semibold">{item.category}</span>
          <span>&middot;</span>
          <time dateTime={item.date}>{formattedDate}</time>
        </div>
        <h3 className="font-heading mt-3 text-base font-semibold text-foreground-950 leading-snug">{item.title}</h3>
        <p className="mt-2 text-xs text-foreground-500 leading-relaxed line-clamp-2">{item.excerpt}</p>
      </div>
    </Link>
  );
}