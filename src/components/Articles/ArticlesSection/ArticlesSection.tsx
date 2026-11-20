import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import styles from './ArticlesSection.module.css'; 
import { ArticleCard } from '../ArticleCard/ArticleCard.tsx'; 
import { sortArticlesByDate } from '../../../pages/ArticlesSection/articlesUtils';
import { fetchArticles } from '../../../services/api';
import { useApiData } from '../../../hooks/useApiData';

export function ArticlesSection(){
    const { data: articles, isLoading, error, retry } = useApiData(fetchArticles);
    const sortedArticles = sortArticlesByDate(articles ?? []);

    return (
        <section className={styles.articlesContainer}>
            
            <h3 className={styles.sectionTitle}>LATEST ARTICLES</h3> 

            {isLoading ? (
                <p role="status">Loading articles...</p>
            ) : error ? (
                <div role="alert">
                    <p>Could not load articles: {error}</p>
                    <button type="button" onClick={retry}>Try again</button>
                </div>
            ) : sortedArticles.length === 0 ? (
                <p>No articles available.</p>
            ) : (
                <div className={styles.cardGrid}>
                    {sortedArticles.map((article, index) => (
                        <div
                            key={article.id ?? `${article.title}-${index}`}
                            className={styles.cardItem}
                            style={{ '--i': index } as CSSProperties}
                        >
                            {article.month && article.day && article.year && (
                                <span className={styles.date}>{`${article.month} ${article.day}, ${article.year}`}</span>
                            )}
                            <ArticleCard article={article} />
                        </div>
                    ))}
                </div>
            )}
            
            <Link to="/articles" className={styles.sectionViewMoreLink}>
                See all articles
            </Link>

        </section>
    );
} 