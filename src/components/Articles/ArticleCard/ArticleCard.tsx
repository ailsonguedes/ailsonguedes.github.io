import styles from './ArticleCard.module.css';
import { type Article } from '../../../pages/ArticlesSection/ArticlesSectionData.ts'; 

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps){
  // Formato: "October 30, 2025" como no gelzin.com
  const formattedDate = `${article.month} ${article.day}, ${article.year}`;
  
  return (
    <a href={article.link} className={styles.articleCard} target="_blank" rel="noopener noreferrer">
        <span className={styles.articleDate}>{formattedDate}</span>
        <span className={styles.articleBody}>
            <span className={styles.titleRow}>
                <span className={styles.articleTitle}>{article.title}</span>
                <svg className={styles.arrow} viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
                    <path d="M4.5 11.5l7-7M5.5 4.5h6v6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            <span className={styles.articleDescription}>{article.description}</span>
        </span>
    </a>
  );
}