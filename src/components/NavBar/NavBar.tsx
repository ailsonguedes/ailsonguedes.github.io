import logoUrl from '../../assets/logo_tengu.png';
import styles from './NavBar.module.css'

export function NavBar(){
    return (
        <>
            <nav className={styles.navContainer}>
                <div className={styles.navLeftContainer}>
                    <a href='https://www.notion.so/React-Howto-2a663a3863a981ed9e65c1dee124ab53' target='_blank'>
                        <img src={logoUrl} alt="Logo da Aplicação" height="50" width="50"></img>
                    </a>
                </div>

                <div className={styles.navSpace}></div>

                <div className={styles.navRightContainer}>
                    <a className={styles.navLinks}>Home</a>
                    <a className={styles.navLinks}>Blog</a>
                    <a className={styles.navLinks}>Projects</a>
                    <a className={styles.navLinks}>CV</a>
                </div>
            </nav>
        </>
    )
}