import styles from './ProjectsSection.module.css';
import { ProjectItem } from '../ProjectItem/ProjectItem'; 
import { projectsSectionData, type Project } from '../../../pages/ProjectsSection/ProjectsSectionData'; 

/**
 * 💡 Função para agrupar e classificar os projetos por ano.
 * Retorna um objeto onde as chaves são os anos (ex: { '2025': [proj1, proj2], '2023': [proj3], ... })
 */
const groupProjectsByYear = (projects: Project[]) => {
    // 1. Agrupa os projetos por ano
    const grouped = projects.reduce((acc, project) => {
        const year = project.year;
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(project);
        return acc;
    }, {} as Record<string, Project[]>);

    // 2. Classifica os anos em ordem decrescente (do mais novo para o mais antigo)
    const sortedYears = Object.keys(grouped).sort((a, b) => b.localeCompare(a));
    
    // 3. Constrói o array final de grupos na ordem correta
    return sortedYears.map(year => ({
        year,
        projects: grouped[year],
    }));
};

/* const SECTION_VIEW_ALL_LINK = "/todos-os-projetos"; */

export function ProjectsSection(){
    // 💡 Chamada da função para obter os dados agrupados e classificados
    const groupedAndSortedProjects = groupProjectsByYear(projectsSectionData);

    return (
        <section className={styles.projectsContainer}>
            
            <h3 className={styles.sectionTitle}>ALGUNS PROJETOS</h3> 

            <div className={styles.cardGrid}>
                {/* Itera sobre os grupos de ano já classificados */}
                {groupedAndSortedProjects.map(group => (
                    <ProjectItem 
                        key={group.year} 
                        year={group.year}
                        // O ProjectItem só precisa receber o array de projetos e o ano
                        projects={group.projects} 
                    />
                ))}
            </div> 
            
            <a href="https://github.com/ailsonguedes" target='_blank' className={styles.sectionViewMoreLink}>
                view more...
            </a>

        </section>
    );
}