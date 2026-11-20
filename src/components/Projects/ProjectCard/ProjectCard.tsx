// ProjectCard.tsx

import styles from './ProjectCard.module.css';
import { Link } from 'react-router-dom';
import { TechnologyTag } from '../../TechnologyTag/TechnologyTag';

interface ProjectCardProps {
  projectName?: string;
  title: string;
  description?: string;
  link?: string;
  tags?: string[];
  showIcon?: boolean;
  icon?: string;
}

export function ProjectCard({ projectName, title, description, link, tags = [], showIcon = false, icon }: ProjectCardProps){
    const content = (
        <>
            <span className={styles.titleRow}>
                {showIcon && (
                    icon
                        ? <img src={icon} alt="" className={styles.icon} />
                        : <span className={styles.icon} aria-hidden="true">{title.charAt(0).toUpperCase()}</span>
                )}
                <span className={styles.projectTitle}>{title}</span>
                <svg className={styles.arrow} viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
                    <path d="M4.5 11.5l7-7M5.5 4.5h6v6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            {description && <span className={styles.projectDescription}>{description}</span>}
            {tags.length > 0 && (
                <span className={styles.tags}>
                    {tags.map((tag) => (
                        <TechnologyTag key={tag} name={tag} className={styles.tag} />
                    ))}
                </span>
            )}
        </>
    );

    return projectName ? (
        <Link to={`/projects/${encodeURIComponent(projectName)}`} className={styles.projectCard}>
            {content}
        </Link>
    ) : link ? (
        <a href={link} className={styles.projectCard} target="_blank" rel="noopener noreferrer">
            {content}
        </a>
    ) : (
        <div className={styles.projectCard}>{content}</div>
    );
}