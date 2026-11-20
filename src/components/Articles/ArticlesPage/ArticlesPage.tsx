import type { CSSProperties } from 'react';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { groupArticlesByYear, sortArticlesByDate } from '../../../pages/ArticlesSection/articlesUtils';
import { fetchArticles } from '../../../services/api';
import { useApiData } from '../../../hooks/useApiData';
import styles from './ArticlesPage.module.css';

export function ArticlesPage() {
    const { data: articles, isLoading, error, retry } = useApiData(fetchArticles);
    const groups = groupArticlesByYear(sortArticlesByDate(articles ?? []));

    return (
        <main className={styles.page}>
            <h1 className={styles.title}>articles</h1>

            {isLoading ? (
                <p role="status">Loading articles...</p>
            ) : error ? (
                <div role="alert" className={styles.message}>
                    <p>Could not load articles: {error}</p>
                    <button type="button" onClick={retry}>Try again</button>
                </div>
            ) : groups.length === 0 ? (
                <p>No articles available.</p>
            ) : (
                groups.map((group, groupIndex) => (
                    <section
                        key={group.year}
                        className={styles.yearGroup}
                        style={{ '--i': groupIndex } as CSSProperties}
                        aria-labelledby={`articles-${group.year}`}
                    >
                        <h2 id={`articles-${group.year}`} className={styles.year}>{group.year}</h2>
                        <ul className={styles.list}>
                            {group.articles.map((article, articleIndex) => (
                                <li key={article.id ?? `${article.title}-${articleIndex}`} className={styles.row}>
                                    <time className={styles.date}>
                                        {[article.month, article.day].filter(Boolean).join(' ') || '—'}
                                    </time>
                                    <ArticleCard article={article} />
                                </li>
                            ))}
                        </ul>
                    </section>
                ))
            )}
        </main>
    );
}
