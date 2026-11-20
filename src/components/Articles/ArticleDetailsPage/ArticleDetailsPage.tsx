import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import { useCallback } from 'react';
import { fetchArticleByName } from '../../../services/api';
import { useApiData } from '../../../hooks/useApiData';
import { MarkdownVideoEmbed } from '../../MarkdownVideoEmbed/MarkdownVideoEmbed';
import { MarkdownImage } from './MarkdownImage';
import { markdownSanitizeSchema } from '../../../utils/markdownSanitizeSchema';
import styles from './ArticleDetailsPage.module.css';

function removeRepeatedArticleTitle(markdown: string, title: string): string {
    const heading = markdown.match(/^#{1,6}\s+(.+?)(?:\r?\n|$)/);
    const headingText = heading?.[1].replace(/[*_`~]/g, '').trim();

    return heading && headingText?.toLowerCase() === title.trim().toLowerCase()
        ? markdown.slice(heading[0].length).trimStart()
        : markdown;
}

export function ArticleDetailsPage() {
    const { articleName } = useParams();
    const loadArticle = useCallback(
        () => fetchArticleByName(articleName ?? ''),
        [articleName],
    );
    const { data: article, isLoading, error, retry } = useApiData(loadArticle);

    if (isLoading) {
        return (
            <main className={styles.page}>
                <p role="status">Loading article...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main className={styles.page}>
                <Link to="/articles" className={styles.messageBackLink}>← Back to articles</Link>
                <div role="alert" className={styles.message}>
                    <p>Could not load this article: {error}</p>
                    <button type="button" onClick={retry}>Try again</button>
                </div>
            </main>
        );
    }

    if (!article) {
        return (
            <main className={styles.page}>
                <Link to="/articles" className={styles.messageBackLink}>← Back to articles</Link>
                <div className={styles.message}>
                    <h1>Article not found</h1>
                    <p>This article may have been removed or the link may be incorrect.</p>
                </div>
            </main>
        );
    }

    const description = article.description?.trim();
    const text = article.text?.trim();
    const lead = description && (!text || description !== text) ? description : undefined;
    const markdown = text ? removeRepeatedArticleTitle(text, article.title) : '';
    const wordCount = (text ?? description ?? '').split(/\s+/).filter(Boolean).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));
    const sourceUrl = /^https?:\/\//i.test(article.link ?? '') ? article.link : undefined;
    const date = article.year && article.month && article.day
        ? `${article.month} ${article.day}, ${article.year}`
        : [article.month, article.day, article.year].filter(Boolean).join(' ');

    return (
        <main className={styles.page}>
            <article className={styles.article}>
                <header className={styles.header}>
                    <div className={styles.titleRow}>
                        <Link to="/articles" className={styles.backLink} aria-label="Back to articles">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M19 12H5m7-7-7 7 7 7" />
                            </svg>
                        </Link>
                        <h1 className={styles.title}>{article.title}</h1>
                    </div>
                    {(date || wordCount > 0) && (
                        <div className={styles.metadata}>
                            {date && <time>{date}</time>}
                            <span>{readingTime} {readingTime === 1 ? 'minute' : 'minutes'} read</span>
                        </div>
                    )}
                </header>

                {lead && <p className={styles.lead}>{lead}</p>}
                {markdown && (
                    <div className={styles.body}>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw, [rehypeSanitize, markdownSanitizeSchema]]}
                            components={{
                                h1: ({ children }) => <h2>{children}</h2>,
                                iframe: ({ src, title }) => <MarkdownVideoEmbed src={src} title={title} />,
                                img: ({ src, alt, title }) => <MarkdownImage src={src} alt={alt} title={title} />,
                                a: ({ href, children }) => {
                                    const isExternal = /^https?:\/\//i.test(href ?? '');
                                    return (
                                        <a
                                            href={href}
                                            target={isExternal ? '_blank' : undefined}
                                            rel={isExternal ? 'noopener noreferrer' : undefined}
                                        >
                                            {children}
                                        </a>
                                    );
                                },
                            }}
                        >
                            {markdown}
                        </ReactMarkdown>
                    </div>
                )}
                {sourceUrl && (
                    <a className={styles.sourceLink} href={sourceUrl} target="_blank" rel="noopener noreferrer">
                        Read original article
                    </a>
                )}
            </article>
        </main>
    );
}
