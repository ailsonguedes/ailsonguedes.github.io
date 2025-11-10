export interface Project {
  title: string;
  description: string;
  year: string; // 💡 NOVO: Ano agora faz parte do projeto individual
  link: string;
}

// 💡 A estrutura de dados agora é uma lista PLANA de projetos
export const projectsSectionData: Project[] = [
  {
    title: "Portfolio Web Model", 
    description: "Meu portfólio pessoal...", 
    year: "2025", 
    link: "https://gelzin.com/" 
  },
  { 
    title: "API CAR", 
    description: "a simple api...", 
    year: "2023", 
    link: "https://api-car-exemplo.com/" 
  },
  { 
    title: "Website Antigo", 
    description: "Um projeto de 2024.", 
    year: "2024", 
    link: "https://old-site.com/" 
  },
  { 
    title: "Outro Projeto 2025", 
    description: "Mais um projeto de 2025.", 
    year: "2025", 
    link: "https://another-2025.com/" 
  },

];