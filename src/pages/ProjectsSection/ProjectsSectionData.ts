export interface Project {
  title: string;
  description: string;
  year: string; // 💡 NOVO: Ano agora faz parte do projeto individual
  link: string;
}

// 💡 A estrutura de dados agora é uma lista PLANA de projetos
export const projectsSectionData: Project[] = [
  { 
    title: "Gerador de Frases (IA)", 
    description: "Um gerador de frases simples feito com python integrando um agende de IA.", 
    year: "2025", 
    link: "https://github.com/ailsonguedes/Gerador-de-Frases-IA" 
  },
  { 
    title: "Catalogo de Livros", 
    description: "Aplicação Web de consulta de livros feito com Angular e Django.", 
    year: "2024", 
    link: "https://github.com/ailsonguedes/Catalogo_de_Livros--Angular-DJango-" 
  },

];