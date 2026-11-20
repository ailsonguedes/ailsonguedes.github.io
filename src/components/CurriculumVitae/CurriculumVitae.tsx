import styles from './CurriculumVitae.module.css';
import { fetchExperiences } from '../../services/api';
import { useApiData } from '../../hooks/useApiData';

const techIcons: Record<string, string> = {
    React: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg',
    Python: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg',
    Java: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg',
    SpringBoot: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/springboot.svg',
    Angular: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/angular.svg',
    JavaScript: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg',
    TypeScript: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typescript.svg',
    Figma: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg',
};

export function CurriculumVittae() {
    const { data: experiences, isLoading, error, retry } = useApiData(fetchExperiences);

    return (
        <section className={styles.curriculumContainer}>
            <h1 className={styles.curriculumTitle}>Ailson Guedes Da Fonseca</h1>

            {isLoading ? (
                <p role="status">Loading work experience...</p>
            ) : error ? (
                <div role="alert">
                    <p>Could not load work experience: {error}</p>
                    <button type="button" onClick={retry}>Try again</button>
                </div>
            ) : experiences?.length ? (
                experiences.map((experience) => (
                    <div className={styles.curriculumContent} key={experience.id}>
                        <h3 className={styles.workTitle}>{experience.title}</h3>
                        <div className={styles.workInfoContainer}>
                            <h5 className={styles.workType}>{experience.func}</h5>
                            <h5 className={styles.workPeriod}>{experience.period}</h5>
                        </div>

                        <div className={styles.workDescriptionContainer}>
                            {experience.description.split(/\r?\n\s*\r?\n/).map((paragraph, index) => (
                                <p
                                    key={`${experience.id}-description-${index}`}
                                    className={index === 0
                                        ? styles.workPerformanceDescription
                                        : styles.workTechDescription}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className={styles.workTagContainer}>
                            {experience.tags.map((tech) => {
                                const icon = techIcons[tech];
                                return (
                                    <span
                                        key={tech}
                                        className={styles.workTag}
                                        data-tech={tech}
                                    >
                                        {icon && (
                                            <div className={styles.workTagTooltip}>
                                                <img
                                                    src={icon}
                                                    alt={`${tech} icon`}
                                                    className={styles.workTagIcon}
                                                />
                                            </div>
                                        )}
                                        {tech}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                ))
            ) : (
                <p>No work experience available.</p>
            )}
        </section>
    );
}
