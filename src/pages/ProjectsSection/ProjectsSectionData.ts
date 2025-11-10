// Você pode colocar isso em um arquivo separado (ex: types/projects.ts)
export interface Project {
  title: string;
  description: string;
  link: string;
}

export interface ProjectGroup {
  year: string;
  link: string;
  projects: Project[];
}

// Exemplo de dados para usar no ProjectsSection.tsx
export const projectsSectionData: ProjectGroup[] = [
  {
    year: "2025",
    link: "https://gelzin.com/",
    projects: [
      { title: "Portfolio Web Model", description: "Meu portfólio pessoal...", link: "https://gelzin.com/" },
      { title: "Projeto 02", description: "Descrição do Projeto 02...", link: "https://gemini.google.com/app?hl=pt-BR" },
    ],
  },
  {
    year: "2024",
    link: "#",
    projects: [
      { title: "API de Música", description: "Um backend em Node.js...", link: "#" },
      { title: "Projeto 04", description: "Descrição do Projeto 04...", link: "#" },
    ],
  },
];