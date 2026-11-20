import styles from './Hero.module.css'

export function Hero(){
    return (
        <section className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Ailson Guedes</h1>
                <p className={styles.heroRole}>Software Developer</p>
                <p className={styles.heroText}>
                    Sou Desenvolvedor de Software, Músico e Produtor Musical. Gosto de construir soluções que funcionam bem, fazem sentido e têm propósito. Explore meus projetos, trabalhos e um pouco mais sobre mim no CV.
                </p>
            </div>
        </section>
    )
}