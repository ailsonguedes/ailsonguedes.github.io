import styles from './ArticlesSection.module.css'; 
import { ArticleCard } from '../ArticleCard/ArticleCard.tsx'; 
import { articlesSectionData, type Article } from '../../pages/ArticlesSection/ArticlesSectionData.ts'; 

/**
 * Mapeamento para converter o nome do mês para seu índice (0-11) para uso no construtor Date.
 */
const monthMap: Record<string, number> = {
    'January': 0, 'February': 1, 'March': 2, 'April': 3,
    'May': 4, 'June': 5, 'July': 6, 'August': 7,
    'September': 8, 'October': 9, 'November': 10, 'December': 11,
};

/**
 * Função para classificar os artigos pela data completa (Ano, Mês, Dia)
 * do mais novo para o mais antigo (Decrescente).
 */
const sortArticlesByDate = (articles: Article[]) => {
    return [...articles].sort((a, b) => {
        // Constrói a data completa para A
        const dateA = new Date(
            parseInt(a.year),
            monthMap[a.month],
            parseInt(a.day)
        );
        // Constrói a data completa para B
        const dateB = new Date(
            parseInt(b.year),
            monthMap[b.month],
            parseInt(b.day)
        );
        
        // Classificação decrescente: B - A
        return dateB.getTime() - dateA.getTime();
    });
};

/* const SECTION_VIEW_ALL_LINK = "/todos-os-artigos"; */

export function ArticlesSection(){
    const sortedArticles = sortArticlesByDate(articlesSectionData);

    return (
        <section className={styles.articlesContainer}>
            
            <h3 className={styles.sectionTitle}>ULTIMOS ARTIGOS</h3> 

            <div className={styles.cardGrid}>
                {/* Mapeia a lista de artigos já classificada */}
                {sortedArticles.map((article) => (
                    <ArticleCard 
                        key={`${article.year}-${article.month}-${article.day}-${article.title}`} 
                        article={article}
                    />
                ))}
            </div> 
            
            <a href="https://medium.com/@ailsonsixseven" target="_blank" className={styles.sectionViewMoreLink}>
                view more...
            </a>

        </section>
    );
} 