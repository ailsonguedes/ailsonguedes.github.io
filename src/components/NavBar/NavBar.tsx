import { Link } from 'react-router-dom';
import logoUrl from '../../assets/logo_nosllyah.jpeg';
import styles from './NavBar.module.css'

export function NavBar(){
    return (
        <nav className={styles.navContainer}>
            <div className={styles.navContent}>
                <Link to="/" className={styles.avatarLink}>
                    <img src={logoUrl} alt="Avatar" className={styles.avatar} />
                </Link>
                <div className={styles.navLinks}>
                    <Link className={styles.navLink} to="/">home</Link>
                    <Link className={styles.navLink} to="/articles">articles</Link>
                    <Link className={styles.navLink} to="/projects">projects</Link>
                    <Link className={styles.navLink} to="/cv">cv</Link>
                </div>
            </div>
        </nav>
    )
}