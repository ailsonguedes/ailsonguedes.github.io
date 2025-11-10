import styles from './ProjectsSection.module.css'; // O CSS para o layout da seção
import { ProjectItem } from '../ProjectItem/ProjectItem'; // O componente agrupador de ano
// Importe os dados E o tipo ProjectGroup do seu arquivo de dados
import { projectsSectionData, type ProjectGroup } from '../../pages/ProjectsSection/ProjectsSectionData'; 

export function ProjectsSection(){
    return (
        // O elemento principal que será centralizado na página
        <section className={styles.projectsContainer}>
            
            {/* O título da seção (ex: "Projetos") */}
            <h3 className={styles.sectionTitle}>SOME PROJECTS</h3> 

            <div className={styles.cardGrid}>
                {/* Mapeia os dados, informando o tipo ProjectGroup para evitar o erro 'any' */}
                {projectsSectionData.map((group: ProjectGroup) => (
                    <ProjectItem 
                        key={group.year} 
                        year={group.year}
                        projects={group.projects} // Passa o array de projetos
                    />
                ))}
            </div>

            <a href="" className={styles.viewMoreLink}>
                view more...
            </a>
        </section>
    );
}