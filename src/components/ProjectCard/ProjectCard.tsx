// ProjectCard.tsx

import styles from './ProjectCard.module.css';

// 💡 ESSENCIAL: Definir as props que o componente aceita
interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export function ProjectCard({ title, description, link }: ProjectCardProps){
    return (
            // O card individual (pode ser um <a> ou uma <div>, dependendo da necessidade de hover/click)
            <a href={link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                <h5 className={styles.projectTitle}>{title}</h5>
                <p className={styles.projectDescription}>{description}</p>
            </a>
    );
}