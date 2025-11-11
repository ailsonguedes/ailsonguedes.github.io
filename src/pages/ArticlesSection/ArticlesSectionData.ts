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
    title: "Sobre ORCAS e Ceifadores", 
    description: "Neste artigo falo um pouco sobre a linguagem ORCA, utilizada para criação musical.", 
    year: "2023", 
    month: "November", 
    day: "27", 
    link: "https://medium.com/@ailsonsixseven/sobre-orcas-e-ceifadores-432cf2fcd98c" 
  },
  { 
    title: "Em Defesa Daquilo Que Não Precisa Ser Defendido", 
    description: "Artigo onde documento a minha primeira experência utilizando Angular.", 
    year: "2024", 
    month: "March", 
    day: "23", 
    link: "https://medium.com/@ailsonsixseven/em-defesa-daquilo-que-n%C3%A3o-precisa-ser-defendido-f7ff70051ae3" 
  },
  { 
    title: "A Cifra de Eich", 
    description: "Artigo onde falo um pouco sobre a técnica de ofuscação de código JavaScript.", 
    year: "2024", 
    month: "November", 
    day: "4", 
    link: "https://medium.com/@ailsonsixseven/a-cifra-de-eich-8fbda5ab2e86" 
  },
];