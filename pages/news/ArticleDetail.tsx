import NotFound from '@/pages/NotFound';
import { usePageMeta } from '@/hooks/usePageMeta';
import ClosingCta from '@/pages/home/components/ClosingCta';
import { getArticle, getArticleBody } from '@/mocks/news';
import ArticleHero from './components/detail/ArticleHero';
import ArticleBody from './components/detail/ArticleBody';
import ArticleSidebar from './components/detail/ArticleSidebar';
import RelatedArticles from './components/detail/RelatedArticles';

export default function ArticleDetail({ slug }: { slug: string }) {
  const article = getArticle(slug);

  usePageMeta({
    title: article ? `${article.title} | John Holt PLC` : 'Article Not Found | John Holt PLC',
    description: article
      ? article.excerpt
      : 'The article you are looking for could not be found. Browse the latest John Holt PLC news and insights instead.',
    path: article ? `/news/${article.slug}` : '/news',
    type: 'article',
  });

  if (!article) {
    return <NotFound />;
  }

  const body = getArticleBody(slug);

  return (
    <>
      <ArticleHero article={article} />
      <section className="py-16 md:py-20 bg-background-100">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <article className="lg:col-span-8">
              <ArticleBody blocks={body} />
            </article>
            <div className="lg:col-span-4">
              <ArticleSidebar article={article} />
            </div>
          </div>
        </div>
      </section>
      <RelatedArticles slug={slug} />
      <ClosingCta />
    </>
  );
}