import styles from './ArticleCard.module.css';
import { type Article } from '../../pages/ArticlesSection/ArticlesSectionData.ts'; 

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps){
    // Formata a data para exibir 'Mês Dia, Ano'
    const formattedDate = `${article.month} ${article.day}, ${article.year}`;
    
    return (
      <>

        <p className={styles.articleDate}>{formattedDate}</p>

        <a href={article.link} className={styles.articleLink} target="_blank" rel="noopener noreferrer">
            
            {/* Coluna 2: Conteúdo (título e descrição recuados) */}
            <div className={styles.articleContent}>
              <h5 className={styles.articleTitle}>{article.title}</h5>
              <p className={styles.articleDescription}>{article.description}</p>
            </div>
            
        </a>
    </>
    );
}