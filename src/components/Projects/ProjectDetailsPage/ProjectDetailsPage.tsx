import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Children, isValidElement, useEffect, useState, type ReactElement, type ReactNode } from 'react';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import { useApiData } from '../../../hooks/useApiData';
import { fetchPublicProjects } from '../../../services/api';
import styles from './ProjectDetailsPage.module.css';

interface MarkdownCodeProps {
    className?: string;
    children?: ReactNode;
}

function isMarkdownCodeElement(node: ReactNode): node is ReactElement<MarkdownCodeProps> {
    return isValidElement<MarkdownCodeProps>(node) && node.type === 'code';
}

function MarkdownCodeBlock({ children }: { children: ReactNode }) {
    const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');
    const codeElement = Children.toArray(children).find(isMarkdownCodeElement);
    const code = typeof codeElement?.props.children === 'string'
        ? codeElement.props.children.replace(/\n$/, '')
        : '';
    const language = codeElement?.props.className?.match(/(?:^|\s)language-([^\s]+)/i)?.[1] ?? 'code';

    useEffect(() => {
        if (copyState !== 'copied') return;
        const timeoutId = window.setTimeout(() => setCopyState('idle'), 1600);
        return () => window.clearTimeout(timeoutId);
    }, [copyState]);

    async function copyCode() {
        try {
            await navigator.clipboard.writeText(code);
            setCopyState('copied');
        } catch {
            setCopyState('error');
        }
    }

    return (
        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
                <span>{language}</span>
                <button
                    type="button"
                    onClick={copyCode}
                    aria-label={copyState === 'copied' ? 'Code copied' : 'Copy code'}
                    title={copyState === 'copied' ? 'Copied' : 'Copy code'}
                >
                    {copyState === 'copied' ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m5 12 4 4L19 6" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="8" y="8" width="12" height="12" rx="2" />
                            <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                        </svg>
                    )}
                </button>
            </div>
            <pre>{children}</pre>
            {copyState === 'copied' && <span className={styles.srOnly} role="status">Code copied.</span>}
            {copyState === 'error' && (
                <p className={styles.codeError} role="alert">
                    Could not copy code. Check clipboard permissions and try again.
                </p>
            )}
        </div>
    );
}

function removeRepeatedProjectTitle(markdown: string, title: string): string {
    const heading = markdown.match(/^#{1,6}\s+(.+?)(?:\r?\n|$)/);
    const headingText = heading?.[1].replace(/[*_`~]/g, '').trim();

    return heading && headingText?.toLowerCase() === title.trim().toLowerCase()
        ? markdown.slice(heading[0].length).trimStart()
        : markdown;
}

export function ProjectDetailsPage() {
    const { projectId } = useParams();
    const { data: projects, isLoading, error, retry } = useApiData(fetchPublicProjects);
    const project = projects?.find((item) => item.id === projectId);

    if (isLoading) {
        return (
            <main className={styles.page}>
                <p role="status">Loading project...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main className={styles.page}>
                <Link to="/projects" className={styles.messageBackLink}>← Back to projects</Link>
                <div role="alert" className={styles.message}>
                    <p>Could not load this project: {error}</p>
                    <button type="button" onClick={retry}>Try again</button>
                </div>
            </main>
        );
    }

    if (!project) {
        return (
            <main className={styles.page}>
                <Link to="/projects" className={styles.messageBackLink}>← Back to projects</Link>
                <div className={styles.message}>
                    <h1>Project not found</h1>
                    <p>This project may have been removed or the link may be incorrect.</p>
                </div>
            </main>
        );
    }

    const description = project.description?.trim();
    const body = project.text?.trim();
    const hasBody = Boolean(body && body !== description);
    const markdown = hasBody && body ? removeRepeatedProjectTitle(body, project.title) : '';

    return (
        <main className={styles.page}>
            <article className={styles.article}>
                <header className={styles.header}>
                    {project.icon && <img src={project.icon} alt="" className={styles.icon} />}
                    <div className={styles.titleRow}>
                        <Link to="/projects" className={styles.backLink} aria-label="Back to projects">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M19 12H5m7-7-7 7 7 7" />
                            </svg>
                        </Link>
                        <h1 className={styles.title}>{project.title}</h1>
                    </div>
                    {(project.tags?.length ?? 0) > 0 && (
                        <ul className={styles.tags} aria-label="Technologies">
                            {project.tags?.map((tag) => <li key={tag}>{tag}</li>)}
                        </ul>
                    )}
                </header>

                {markdown && (
                    <div className={styles.body}>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw, rehypeSanitize]}
                            components={{
                                h1: ({ children }) => <h2>{children}</h2>,
                                pre: ({ children }) => <MarkdownCodeBlock>{children}</MarkdownCodeBlock>,
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
                                img: ({ src, alt }) => (
                                    <img src={src} alt={alt ?? ''} loading="lazy" decoding="async" />
                                ),
                            }}
                        >
                            {markdown}
                        </ReactMarkdown>
                    </div>
                )}
            </article>
        </main>
    );
}
