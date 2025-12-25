import styles from './ArticleCard.module.css';
import { type Article } from '../../../pages/ArticlesSection/ArticlesSectionData.ts'; 

interface ArticleCardProps {
  article: Article;
}

// Mapeamento para mês abreviado
const monthAbbr: Record<string, string> = {
    'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr',
    'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug',
    'September': 'Sep', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec',
};

export function ArticleCard({ article }: ArticleCardProps){
  // Formato: "Oct 30, 2025" como no gelzin.com
  const formattedDate = `${monthAbbr[article.month]} ${article.day}, ${article.year}`;
  
  return (
    <div className={styles.articleCard}>
        <span className={styles.articleDate}>{formattedDate}</span>
        <a href={article.link} className={styles.articleLink} target="_blank" rel="noopener noreferrer">
            <span className={styles.articleTitle}>{article.title}</span>
        </a>
    </div>
  );
}