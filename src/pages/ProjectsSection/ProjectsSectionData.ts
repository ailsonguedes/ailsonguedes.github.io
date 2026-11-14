export interface Project {
  title: string;
  description: string;
  year: string; // 💡 NOVO: Ano agora faz parte do projeto individual
  month?: string; // Mês em inglês (ex: "October"), usado na página /projects
  link: string;
  tags: string[];
  icon?: string; // URL de um ícone; sem ele a página usa um monograma com a inicial
}

// 💡 A estrutura de dados agora é uma lista PLANA de projetos
export const projectsSectionData: Project[] = [
  { 
    title: "Gerador de Frases (IA)", 
    description: "Um gerador de frases simples feito com python integrando um agende de IA.", 
    year: "2025", 
    month: "October",
    link: "https://github.com/ailsonguedes/Gerador-de-Frases-IA",
    tags: ["Python", "IA"]
  },
  { 
    title: "Catalogo de Livros", 
    description: "Aplicação Web de consulta de livros feito com Angular e Django.", 
    year: "2024", 
    month: "April",
    link: "https://github.com/ailsonguedes/Catalogo_de_Livros--Angular-DJango-",
    tags: ["Angular", "Django"]
  },

  // --- Projetos fixados (pinned) no GitHub, adicionados para testar "3 mais recentes" (home)
  // x "todos" (/projects). Datas = criação dos repositórios. Todos públicos. ---
  {
    title: "Task Manager CLI",
    description: "Gerenciador de tarefas para o terminal, em Java 17, com persistência local em SQLite.",
    year: "2025",
    month: "December",
    link: "https://github.com/ailsonguedes/taskmanager-cli",
    tags: ["Java", "SQLite"]
  },
  {
    title: "Linux Cleaner CLI",
    description: "Ferramenta de linha de comando em Python que libera espaço no Linux limpando caches de navegadores, arquivos temporários e lixo do sistema.",
    year: "2025",
    month: "December",
    link: "https://github.com/ailsonguedes/linux-cleaner-cli",
    tags: ["Python", "CLI"]
  },
  {
    title: "QR Gen",
    description: "Aplicação full-stack que gera QR Codes via API REST, com frontend em React/TS, backend em Flask e Docker Compose.",
    year: "2025",
    month: "November",
    link: "https://github.com/ailsonguedes/QR-Gen",
    tags: ["React", "Flask"]
  },
  {
    title: "Neovim Lua Configs",
    description: "Configuração pessoal do Neovim 0.9+ com Paq-nvim, Lua e LSP para um IDE moderno e leve.",
    year: "2024",
    month: "April",
    link: "https://github.com/ailsonguedes/Neovim-Lua-Configs",
    tags: ["Lua", "Neovim"]
  },
  {
    title: "API Catálogo de Livros",
    description: "API de catálogo de livros com Django Rest Framework para armazenar nome, autor, ano de lançamento e edição.",
    year: "2023",
    month: "November",
    link: "https://github.com/ailsonguedes/API-Catalogo-de-Livros",
    tags: ["Django", "REST"]
  },
];
