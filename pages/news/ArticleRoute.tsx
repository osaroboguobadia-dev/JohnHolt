import { useParams } from 'react-router-dom';
import ArticleDetail from './ArticleDetail';

export default function ArticleRoute() {
  const { slug } = useParams<{ slug: string }>();
  return <ArticleDetail slug={slug ?? ''} />;
}