// src/hooks/useTheme.ts
import { useState, useEffect } from 'react';

// Define os valores possíveis do tema
type Theme = 'light' | 'dark';

export function useTheme() {
  // 1. Tenta ler o tema do localStorage, ou usa 'light' como padrão
  const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage.getItem('theme');
      return (savedTheme === 'dark' || savedTheme === 'light') ? savedTheme : 'light';
    }
    return 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  // 2. Função para alternar o tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // 3. Efeito que aplica a mudança (no <html> e no localStorage)
  useEffect(() => {
    const htmlElement = document.documentElement;

    // Remove a classe/atributo anterior
    htmlElement.removeAttribute('data-theme');

    // Adiciona o novo
    if (theme === 'dark') {
      htmlElement.setAttribute('data-theme', 'dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.setAttribute('data-theme', 'light');
      window.localStorage.setItem('theme', 'light');
    }
  }, [theme]); // Roda sempre que o 'theme' mudar

  return { theme, toggleTheme };
}