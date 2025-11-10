import styles from './ArticleCard.module.css';
import { type Article } from '../../pages/ArticlesSection/ArticlesSectionData.ts'; 

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps){
    // Formata a data para exibir 'Mês Dia, Ano'
    const formattedDate = `${article.month} ${article.day}, ${article.year}`;
    
    return (
        // O link principal usa Flexbox para alinhar a data à esquerda e o conteúdo à direita
        <a href={article.link} className={styles.articleLink} target="_blank" rel="noopener noreferrer">
            
            {/* Coluna 1: A data (empurrada para a margem) */}
            <p className={styles.articleDate}>{formattedDate}</p>
            
            {/* Coluna 2: Conteúdo (título e descrição recuados) */}
            <div className={styles.articleContent}>
              <h5 className={styles.articleTitle}>{article.title}</h5>
              <p className={styles.articleDescription}>{article.description}</p>
            </div>
            
        </a>
    );
}