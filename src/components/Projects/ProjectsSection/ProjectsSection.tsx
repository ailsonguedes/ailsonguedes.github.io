import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectsSection.module.css';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { projectsSectionData } from '../../../pages/ProjectsSection/ProjectsSectionData';
import { groupProjectsByYear, sortProjectsByDate } from '../../../pages/ProjectsSection/projectsUtils';

// Quantos projetos (os mais recentes) aparecem na home; todos ficam em /projects
const LATEST_PROJECTS_LIMIT = 3;

export function ProjectsSection(){
    const latestProjects = sortProjectsByDate(projectsSectionData).slice(0, LATEST_PROJECTS_LIMIT);
    const groupedAndSortedProjects = groupProjectsByYear(latestProjects);
    const hasMore = projectsSectionData.length > LATEST_PROJECTS_LIMIT;

    return (
        <section className={styles.projectsContainer}>
            
            <h3 className={styles.sectionTitle}>SOME PROJECTS</h3> 

            <div className={styles.cardGrid}>
                {/* Itera sobre os grupos de ano já classificados */}
                {groupedAndSortedProjects.map((group, index) => (
                    <div
                        key={group.year}
                        className={styles.projectContainer}
                        style={{ '--i': index } as CSSProperties}
                    >
                        <div className={styles.header}>
                            <h4 className={styles.projectYear}>{group.year}</h4>
                        </div>
                        <div className={styles.contentWrapper}>
                            {group.projects.map((project) => (
                                <ProjectCard 
                                    key={project.title} 
                                    title={project.title}
                                    description={project.description}
                                    link={project.link}
                                    tags={project.tags}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div> 

            {hasMore && (
                <Link to="/projects" className={styles.sectionViewMoreLink}>
                    See all projects
                </Link>
            )}

        </section>
    );
}