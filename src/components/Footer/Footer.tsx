import styles from './Footer.module.css';

// URLs de ícones de exemplo para substituir imports locais
const GITHUB_ICON_URL = "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/github.svg";
const LINKEDIN_ICON_URL = "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/linkedin.svg";

export function Footer(){
    // Nota: O ícone vazio (primeiro <img>) foi substituído por um ícone de casa/home
    const HOME_ICON_URL = "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/home.svg";

    return(
        <footer className={styles.footerContainer}>
            <div className={styles.footerInnerWrapper}>
                
                {/* 1. Container Esquerdo: Logo e Link Principal */}
                <div className={styles.footerLeftContainer}>
                    {/* Ícone Home/Logo principal */}
                    <img src={HOME_ICON_URL} alt="Home" className={styles.footerIcon} width="20" height="20"></img>

                    <a href="ailsonguedes.com" className={styles.footerLink}>
                        <p className={styles.footerText}>ailsonguedes.com</p>
                    </a>
                </div>

                {/* 2. Container Direito: Links de Redes Sociais */}
                <div className={styles.footerRightContainer}>
                    
                    {/* Exemplo de link para e-mail/contato */}
                    <a href="mailto:ailsonsixseven@gmail.com" target='_blank' className={styles.footerLink}>
                        <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/mail.svg" alt="Email" className={styles.footerIcon} width="20" height="20"></img>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/ailsonguedes" target='_blank' className={styles.footerLink}>
                        <img src={GITHUB_ICON_URL} alt="GitHub" className={styles.footerIcon} width="20" height="20"></img>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/ailson-guedes-059795149/" target='_blank' className={styles.footerLink}>
                        <img src={LINKEDIN_ICON_URL} alt="LinkedIn" className={styles.footerIcon} width="20" height="20"></img>
                    </a>
                </div>
            </div>
        </footer>
    )
}