import styles from './Hero.module.css'
import { Link } from 'react-router-dom'

export function Hero(){
    return (
        <section className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Ailson Guedes</h1>
                <p className={styles.heroRole}>Software Developer</p>
                <p className={styles.heroText}>
                    Desenvolvedor de Software, Músico e Produtor Musical. Gosto de tirar ideias do papel e transformá-las em coisas que fazem sentido. Por aqui você encontra alguns dos meus projetos, trabalhos e um pouco mais sobre mim no <Link to="/cv">cv</Link>.
                </p>
            </div>
        </section>
    )
}