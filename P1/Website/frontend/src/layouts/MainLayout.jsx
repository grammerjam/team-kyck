import React from 'react';
import { Sidebar } from '../utils/Sidebar';
import styles from './MainLayout.module.css';

export function MainLayout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Sidebar />
      <div className={styles.contentContainer}>
        {children}
      </div>
    </div>
  );
}