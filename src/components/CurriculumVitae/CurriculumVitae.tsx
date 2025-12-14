import styles from './CurriculumVitae.module.css'

// Mapeamento de tecnologias para ícones do lucide-static
const techIconsNttData: Record<string, string> = {
    'React': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg',
    'Python': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg',
    'Java': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg',
    'SpringBoot': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/springboot.svg',
};

const techIconsFreelance: Record<string, string> = {
    'Angular': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/angular.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typescript.svg',
    'Figma': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg',
};

export function CurriculumVittae(){
    // Formata a data para exibir 'Mês Dia, Ano'
    
    return (
        <section className={styles.curriculumContainer}>
            <h1 className={styles.curriculumTitle}>Ailson Guedes Da Fonseca</h1>

            <div className={styles.curriculumContent}>
                <h3 className={styles.workTitle}>NTT DATA</h3>
                <div className={styles.workInfoContainer}>
                    <h5 className={styles.workType}>Fullstack Software Developer,</h5>
                    <h5 className={styles.workPeriod}>dez/2025 - present</h5>
                </div>

                <div className={styles.workDescriptionContainer}>
                    <p className={styles.workPerformanceDescription}>Atuei no desenvolvimento front-end de landing pages responsivas para eventos sociais e corporativos (como casamentos). Colaborei com os clientes para entender os requisitos e entregar uma interface elegante e funcional, focada na experiência dos convidados.</p>
                    <br />
                    <p className={styles.workTechDescription}>Desenvolvi estas aplicações (SPAs) utilizando Angular, aplicando sua arquitetura de componentes e formulários reativos (para RSVPs). A escolha do framework foi uma decisão estratégica de aprendizado, aplicando conceitos de uma tecnologia robusta em projetos de escopo controlado.</p>
                </div>

                <div className={styles.workTagContainer}>
                    {Object.keys(techIconsNttData).map((tech) => (
                        <span 
                            key={tech} 
                            className={styles.workTag}
                            data-tech={tech}
                        >
                            <div className={styles.workTagTooltip}>
                                <img 
                                    src={techIconsNttData[tech]} 
                                    alt={`${tech} icon`}
                                    className={styles.workTagIcon}
                                />
                            </div>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            
            <div className={styles.curriculumContent}>
                <h3 className={styles.workTitle}>Freelance</h3>
                <div className={styles.workInfoContainer}>
                    <h5 className={styles.workType}>Front-end Developer,</h5>
                    <h5 className={styles.workPeriod}>jun/2024 - aug/2025</h5>
                </div>

                <div className={styles.workDescriptionContainer}>
                    <p className={styles.workPerformanceDescription}>Atuei no desenvolvimento front-end de landing pages responsivas para eventos sociais e corporativos (como casamentos). Colaborei com os clientes para entender os requisitos e entregar uma interface elegante e funcional, focada na experiência dos convidados.</p>
                    <br />
                    <p className={styles.workTechDescription}>Desenvolvi estas aplicações (SPAs) utilizando Angular, aplicando sua arquitetura de componentes e formulários reativos (para RSVPs). A escolha do framework foi uma decisão estratégica de aprendizado, aplicando conceitos de uma tecnologia robusta em projetos de escopo controlado.</p>
                </div>

                <div className={styles.workTagContainer}>
                    {Object.keys(techIconsFreelance).map((tech) => (
                        <span 
                            key={tech} 
                            className={styles.workTag}
                            data-tech={tech}
                        >
                            <div className={styles.workTagTooltip}>
                                <img 
                                    src={techIconsFreelance[tech]} 
                                    alt={`${tech} icon`}
                                    className={styles.workTagIcon}
                                />
                            </div>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
  }