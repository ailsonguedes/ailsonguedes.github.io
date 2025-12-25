// ProjectCard.tsx

import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export function ProjectCard({ title, description, link }: ProjectCardProps){
    return (
        <div className={styles.projectCard}>
            <a href={link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                <span className={styles.projectTitle}>{title}</span>
            </a>
            <p className={styles.projectDescription}>{description}</p>
        </div>
    );
}