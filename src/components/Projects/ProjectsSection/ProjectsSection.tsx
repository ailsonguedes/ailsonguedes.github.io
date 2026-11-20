import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectsSection.module.css';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { groupProjectsByYear, sortProjectsByDate } from '../../../pages/ProjectsSection/projectsUtils';
import { fetchPublicProjects } from '../../../services/api';
import { useApiData } from '../../../hooks/useApiData';

const LATEST_PROJECTS_LIMIT = 3;

export function ProjectsSection() {
    const { data: projects, isLoading, error, retry } = useApiData(fetchPublicProjects);
    const projectList = projects ?? [];
    const latestProjects = sortProjectsByDate(projectList).slice(0, LATEST_PROJECTS_LIMIT);
    const groupedAndSortedProjects = groupProjectsByYear(latestProjects);
    const hasMore = projectList.length > LATEST_PROJECTS_LIMIT;

    return (
        <section className={styles.projectsContainer}>
            <h3 className={styles.sectionTitle}>SOME PROJECTS</h3>

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
                <div className={styles.cardGrid}>
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
                                {group.projects.map((project, projectIndex) => (
                                    <ProjectCard
                                        key={project.id ?? `${project.title}-${projectIndex}`}
                                        projectId={project.id}
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
            )}

            {!isLoading && !error && hasMore && (
                <Link to="/projects" className={styles.sectionViewMoreLink}>
                    See all projects
                </Link>
            )}
        </section>
    );
}
