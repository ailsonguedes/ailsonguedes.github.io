import type { CSSProperties } from 'react';
import styles from './ProjectsPage.module.css';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { projectsSectionData } from '../../../pages/ProjectsSection/ProjectsSectionData';
import { groupProjectsByYear, sortProjectsByDate } from '../../../pages/ProjectsSection/projectsUtils';

export function ProjectsPage(){
    const groups = groupProjectsByYear(sortProjectsByDate(projectsSectionData));

    return (
        <section className={styles.page}>
            <h1 className={styles.title}>Projects</h1>

            {groups.map((group, groupIndex) => (
                <div
                    key={group.year}
                    className={styles.yearGroup}
                    style={{ '--i': groupIndex } as CSSProperties}
                >
                    <h2 className={styles.year}>{group.year}</h2>
                    <ul className={styles.list}>
                        {group.projects.map((project) => (
                            <li key={project.title} className={styles.row}>
                                <span className={styles.month}>{project.month}</span>
                                <ProjectCard
                                    showIcon
                                    icon={project.icon}
                                    title={project.title}
                                    description={project.description}
                                    link={project.link}
                                    tags={project.tags}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
