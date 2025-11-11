export interface Article {
  title: string;
  description: string;
  // Usamos strings para os componentes da data, como no seu exemplo
  year: string; 
  month: string;
  day: string;
  link: string;
}

export const articlesSectionData: Article[] = [
  {
    title: "Article October 2025", 
    description: "Meu artigo de outubro...", 
    year: "2025", 
    month: "October", 
    day: "30", 
    link: "https://gelzin.com/article/2025/10/30" 
  },
  { 
    title: "Article August 2023", 
    description: "Meu artigo de agosto...", 
    year: "2023", 
    month: "August", 
    day: "05", 
    link: "https://gelzin.com/article/2023/08/05" 
  },
  { 
    title: "Article November 2025 ", 
    description: "Um artigo de novembro, deve vir primeiro.", 
    year: "2025", 
    month: "November", 
    day: "10", 
    link: "https://gelzin.com/article/2025/11/10" 
  },
];