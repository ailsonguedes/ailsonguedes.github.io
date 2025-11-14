import styles from './ArticleCard.module.css';
import { type Article } from '../../pages/ArticlesSection/ArticlesSectionData.ts'; 

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps){
  // Formata a data para exibir 'Mês Dia, Ano'
  const formattedDate = `${article.month} ${article.day}, ${article.year}`;
  
  return (
    // Envolva tudo em uma div principal com a classe de layout.
  <div className={styles.articleCardContainer}> 
        
        {/* Item Flex 1: Data */}
        <p className={styles.articleDate}>{formattedDate}</p>

        {/* Item Flex 2: Link/Conteúdo */}
        <a href={article.link} className={styles.articleLink} target="_blank" rel="noopener noreferrer">
            
            <div className={styles.articleContent}>
              <h5 className={styles.articleTitle}>{article.title}</h5>
            </div>
            
        </a>
      </div>
  );
}