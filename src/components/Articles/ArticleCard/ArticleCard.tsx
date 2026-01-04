import styles from './ArticleCard.module.css';
import { type Article } from '../../../pages/ArticlesSection/ArticlesSectionData.ts'; 

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps){
  // Formato: "October 30, 2025" como no gelzin.com
  const formattedDate = `${article.month} ${article.day}, ${article.year}`;
  
  return (
    <div className={styles.articleCard}>
        <span className={styles.articleDate}>{formattedDate}</span>
        <a href={article.link} className={styles.articleLink} target="_blank" rel="noopener noreferrer">
            <span className={styles.articleTitle}>{article.title}</span>
        </a>
    </div>
  );
}