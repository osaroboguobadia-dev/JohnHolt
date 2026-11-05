import { usePageMeta } from '@/hooks/usePageMeta';
import NewsHero from './components/NewsHero';
import FeaturedArticle from './components/FeaturedArticle';
import NewsList from './components/NewsList';
import NewsCta from './components/NewsCta';

export default function News() {
  usePageMeta({
    title: 'News & Insights | John Holt PLC',
    description:
      'The latest news, insights and project updates from John Holt PLC — power generation, fire safety, engineering and industry topics for Nigerian businesses.',
    path: '/news',
  });

  return (
    <>
      <NewsHero />
      <FeaturedArticle />
      <NewsList />
      <NewsCta />
    </>
  );
}