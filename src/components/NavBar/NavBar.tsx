import logoUrl from '../../assets/logo_nosllyah.jpeg';
import styles from './NavBar.module.css'

export function NavBar(){
    return (
        <>
            <nav className={styles.navContainer}>
                <div className={styles.navLeftContainer}>
                    <a href='#'>
                        <img src={logoUrl} alt="Logo da Aplicação" height="50" width="50"></img>
                    </a>
                </div>

                <div className={styles.navSpace}></div>

                <div className={styles.navRightContainer}>
                    <a className={styles.navLinks} href='#'>Home</a>
                    <a className={styles.navLinks} href='https://medium.com/@ailsonsixseven' target='_blank'>Blog</a>
                    <a className={styles.navLinks} href='https://github.com/ailsonguedes' target='_blank'>Projects</a>
                    <a className={styles.navLinks} href='#'>CV</a>
                </div>
            </nav>
        </>
    )
}