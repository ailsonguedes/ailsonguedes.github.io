import styles from './ArticleCard.module.css';
import { Link } from 'react-router-dom';
import type { Article } from '../../../pages/ArticlesSection/ArticlesSectionData.ts';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps){
  const content = (
    <>
        <span className={styles.titleRow}>
            <span className={styles.articleTitle}>{article.title}</span>
            <svg className={styles.arrow} viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
                <path d="M4.5 11.5l7-7M5.5 4.5h6v6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
        {(article.description ?? article.text) && (
          <span className={styles.articleDescription}>{article.description ?? article.text}</span>
        )}
    </>
  );

  return (
    <Link to={`/articles/${encodeURIComponent(article.title)}`} className={styles.articleCard}>
      {content}
    </Link>
  );
}