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
                        I'm a Brazilian software developer, 
                        musician, and music producer passionate about technology 
                        and innovation, always seeking knowledge and growth.
                    </p>
                </div>
            </div>
        </>
    )
}