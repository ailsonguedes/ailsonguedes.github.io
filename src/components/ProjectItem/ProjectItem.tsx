// ProjectItem.tsx

import { ProjectCard } from '../ProjectCard/ProjectCard'; // Importa o Card
import { type Project } from '../../pages/ProjectsSection/ProjectsSectionData'; // Importa o tipo Project
import styles from './ProjectItem.module.css';

interface ProjectItemProps {
    year: string;
    projects: Project[]; // Recebe a lista de projetos do ano
}

export function ProjectItem({ year, projects }: ProjectItemProps) {
    return (
        <div className={styles.projectContainer}>
            
            <div className={styles.header}>
                <h4 className={styles.projectYear}>{year}</h4>
            </div>

            <div className={styles.contentWrapper}>
                {/* Mapeia a lista de projetos e renderiza ProjectCard */}
                {projects.map((project) => (
                    <ProjectCard 
                        key={project.title} 
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
            
        </div>
    );
}