// import * as React from 'react';
import { useUser } from '../context/user';
import styles from './Sidebar.module.css';

export function Sidebar() {
    const { logout } = useUser()
    return (
        <div className={styles.sidebar}>
            {/* Logo */}
            <a href="/">
                <div className={styles.logo}>
                    <img src="assets/logo.svg" alt="Logo" />
                </div>
            </a>
            
            <div className={styles.navIcons}>
                {/* Home Icon */}
                <a href="/" className={styles.iconLink}>
                    <img src="assets/icon-nav-home.svg" alt="Home" className={styles.icon}/>
                </a>
                
                {/* Movies Icon */}
                <a href="/movies" className={styles.iconLink}>
                    <img src="assets/icon-nav-movies.svg" alt="Movies" className={styles.icon}/>
                </a>
                
                {/* TV Series Icon */}
                <a href="/tv-series" className={styles.iconLink}>
                    <img src="assets/icon-nav-tv-series.svg" alt="TV Series" className={styles.icon}/>
                </a>
                
                {/* Bookmark Icon */}
                <a href="/bookmarks" className={styles.iconLink}>
                    <img src="assets/icon-nav-bookmark.svg" alt="Bookmarks" className={styles.icon}/>
                </a>
            </div>
            {/* Profile Icon */}
            <a href="/" onClick={()=>logout()}  className={styles.profileLink}>
                <img src="assets/image-avatar.png" 
                alt="Home" />
            </a>
            {/* <a href="/profile" className={styles.profileLink}>
                <img src="assets/image-avatar.png" 
                alt="Home" />
            </a> */}
        </div>
    );
}