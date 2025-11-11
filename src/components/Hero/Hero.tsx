import styles from './Hero.module.css'

export function Hero(){
    return (
        <>
            <div className={styles.heroContainer}>
                <div className={styles.heroAboveContainer}>
                    <h1 className={styles.heroTitle}>Ailson Guedes</h1>
                </div>

                <div className={styles.heroUnderContainer}>
                    <p className={styles.heroText}>
                        Desenvolvedor de Software, Músico e Produtor Musical. 
                        Sou movido pelo desafio de criar soluções robustas e de alta performance, 
                        onde a funcionalidade e a simplicidade técnica prevalecem para entregar 
                        resultados sólidos e impactantes.
                    </p>
                </div>
            </div>
        </>
    )
}