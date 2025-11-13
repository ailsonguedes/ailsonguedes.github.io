// Footer.tsx
import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

// Importa o hook que acabamos de criar
import { useTheme } from '../../hooks/useTheme'; // <-- Ajuste o caminho se necessário

// URLs dos ícones (incluindo Sol e Lua)
const GITHUB_ICON_URL = "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/github.svg";
const LINKEDIN_ICON_URL = "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/linkedin.svg";
const MAIL_ICON_URL = "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/mail.svg";
const MOON_ICON_URL = "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/moon.svg";
const SUN_ICON_URL = "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/sun.svg";


export function Footer(){
    // Aqui está a mágica!
    const { theme, toggleTheme } = useTheme();
    const [isIconAnimating, setIsIconAnimating] = useState(false);

    const handleToggleTheme = () => {
        toggleTheme();
        setIsIconAnimating(true);
    };

    useEffect(() => {
        if (!isIconAnimating) {
            return;
        }

        const timeoutId = window.setTimeout(() => {
            setIsIconAnimating(false);
        }, 400);

        return () => window.clearTimeout(timeoutId);
    }, [isIconAnimating]);

    return(
        <footer className={styles.footerContainer}>
            <div className={styles.footerInnerWrapper}>
                
                {/* 1. Container Esquerdo (Idêntico) */}
                <div className={styles.footerLeftContainer}>
                    {/*  NOSSO NOVO BOTÃO DE TEMA  */}
                    <div className={styles.footerLeftButtonContainer}>
                        <button 
                            className={styles.themeToggle} // Um novo estilo para o botão
                            onClick={handleToggleTheme}         // A função do nosso hook!
                            title="Alternar tema"         // Dica para acessibilidade
                        >
                            {/* Renderização condicional: 
                            Mostra o Sol se o tema for 'dark', ou a Lua se for 'light'
                            */}
                            {theme === 'light' ? (
                                <img 
                                    key="moon"
                                    src={MOON_ICON_URL} 
                                    alt="Tema Escuro" 
                                    className={`${styles.footerIcon} ${isIconAnimating ? styles.themeIconSlide : ''}`} 
                                    onAnimationEnd={() => setIsIconAnimating(false)}
                                    width="20" 
                                    height="20" 
                                />
                            ) : (
                                <img 
                                    key="sun"
                                    src={SUN_ICON_URL} 
                                    alt="Tema Claro" 
                                    className={`${styles.footerIcon} ${isIconAnimating ? styles.themeIconSlide : ''}`} 
                                    onAnimationEnd={() => setIsIconAnimating(false)}
                                    width="20" 
                                    height="20" 
                                />
                            )}
                        </button> 
                    </div>                   
                    <a href="ailsonguedes.com" className={styles.footerLink}>
                        <p className={styles.footerText}>ailsonguedes.github.io</p>
                    </a>
                </div>

                {/* 2. Container Direito (Com o novo botão) */}
                <div className={styles.footerRightContainer}>
                    
                    {/* Links de contato (Idênticos) */}
                    <a href="mailto:ailsonsixseven@gmail.com" target='_blank' className={styles.footerLink}>
                        <img src={MAIL_ICON_URL} alt="Email" className={styles.footerIcon} width="20" height="20"></img>
                    </a>
                    <a href="https://github.com/ailsonguedes" target='_blank' className={styles.footerLink}>
                        <img src={GITHUB_ICON_URL} alt="GitHub" className={styles.footerIcon} width="20" height="20"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/ailson-guedes-059795149/" target='_blank' className={styles.footerLink}>
                        <img src={LINKEDIN_ICON_URL} alt="LinkedIn" className={styles.footerIcon} width="20" height="20"></img>
                    </a>
                    
                </div>
            </div>
        </footer>
    )
}