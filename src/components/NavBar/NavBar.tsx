import { useNavigate } from 'react-router-dom';
import logoUrl from '../../assets/logo_nosllyah.jpeg';
import styles from './NavBar.module.css'

export function NavBar(){
    const navigate = useNavigate();

    return (
        <nav className={styles.navContainer}>
            <div className={styles.navContent}>
                <a href="/#" className={styles.avatarLink}>
                    <img src={logoUrl} alt="Avatar" className={styles.avatar} />
                </a>
                <div className={styles.navLinks}>
                    <a className={styles.navLink} href="/#">Home</a>
                    <a className={styles.navLink} href='https://medium.com/@ailsonsixseven' target='_blank' rel='noopener noreferrer'>Projects</a>
                    <a className={styles.navLink} href='https://medium.com/@ailsonsixseven' target='_blank' rel='noopener noreferrer'>Blog</a>
                    <a className={styles.navLink} href="/cv" onClick={(e) => {e.preventDefault(); navigate("/cv");}}>CV</a>
                </div>
            </div>
        </nav>
    )
}