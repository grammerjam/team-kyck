import {useEffect, useState} from 'react';
import styles from './Comments.module.css';

export function Comments(){

    return(
        <>
        <h1 className={styles.commentSectionTitle}>Comments</h1>
        <div className={styles.commentsContainer}>
        </div>
        </>
    )
}