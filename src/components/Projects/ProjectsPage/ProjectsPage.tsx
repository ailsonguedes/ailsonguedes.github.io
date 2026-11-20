import type { CSSProperties } from 'react';
import styles from './ProjectsPage.module.css';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { groupProjectsByYear, sortProjectsByDate } from '../../../pages/ProjectsSection/projectsUtils';
import { fetchPublicProjects } from '../../../services/api';
import { useApiData } from '../../../hooks/useApiData';

export function ProjectsPage() {
    const { data: projects, isLoading, error, retry } = useApiData(fetchPublicProjects);
    const projectList = projects ?? [];
    const groups = groupProjectsByYear(sortProjectsByDate(projectList));

    return (
        <section className={styles.page}>
            <h1 className={styles.title}>Projects</h1>

            {isLoading ? (
                <p role="status">Loading projects...</p>
            ) : error ? (
                <div role="alert">
                    <p>Could not load projects: {error}</p>
                    <button type="button" onClick={retry}>Try again</button>
                </div>
            ) : projectList.length === 0 ? (
                <p>No projects available.</p>
            ) : (
                groups.map((group, groupIndex) => (
                    <div
                        key={group.year}
                        className={styles.yearGroup}
                        style={{ '--i': groupIndex } as CSSProperties}
                    >
                        <h2 className={styles.year}>{group.year}</h2>
                        <ul className={styles.list}>
                            {group.projects.map((project, projectIndex) => (
                                <li
                                    key={project.id ?? `${project.title}-${projectIndex}`}
                                    className={styles.row}
                                >
                                    <span className={styles.month}>{project.month ?? '—'}</span>
                                    <ProjectCard
                                        projectId={project.id}
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
                ))
            )}
        </section>
    );
}
