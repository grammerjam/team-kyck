import * as React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <div className={styles.sidebar}>
            {/* Logo */}
            <div className={styles.logo}>
                <img src="assets/logo.svg" alt="Logo" />
            </div>
            
            <div className={styles.navIcons}>
                {/* Home Icon */}
                <Link href="/" className={styles.iconLink}>
                    <img src="assets/icon-nav-home.svg" alt="Home" className={styles.icon}/>
                </Link>
                
                {/* Movies Icon */}
                <Link href="/movies" className={styles.iconLink}>
                    <img src="assets/icon-nav-movies.svg" alt="Movies" className={styles.icon}/>
                </Link>
                
                {/* TV Series Icon */}
                <Link href="/tv-series" className={styles.iconLink}>
                    <img src="assets/icon-nav-tv-series.svg" alt="TV Series" className={styles.icon}/>
                </Link>
                
                {/* Bookmark Icon */}
                <Link href="/bookmarks" className={styles.iconLink}>
                    <img src="assets/icon-nav-bookmark.svg" alt="Bookmarks" className={styles.icon}/>
                </Link>
                
                {/* Profile Icon */}
                <Link href="/profile" className={styles.iconLink}>
                    <img src="assets/image-avatar.png" 
                    alt="Home" 
                    style={{width: '30px', height: '30px', marginTop: '100px'}}/>
                </Link>
            </div>
        </div>
    );
}