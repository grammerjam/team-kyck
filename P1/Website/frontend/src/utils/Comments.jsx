import {useEffect, useState} from 'react';
import styles from './Comments.module.css';

export function Comments(){
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch comments from JSON file
        fetch('/assets/comments.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch comments');
                }
                return response.json();
            })
            .then(data => {
                setComments(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching comments:', err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    // Format timestamp to a readable date
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return(
        <>
            <h1 className={styles.commentSectionTitle}>Comments</h1>
            <div className={styles.commentsContainer}>
                {loading ? (
                    <p>Loading comments...</p>
                ) : error ? (
                    <p className={styles.error}>Error: {error}</p>
                ) : comments.length === 0 ? (
                    <p>No comments yet.</p>
                ) : (
                    comments.map((comment, index) => (
                        <div key={index} className={styles.commentItem}>
                            <div className={styles.commentHeader}>
                                <span className={styles.username}>{comment.user}</span>
                                <span className={styles.timestamp}>{formatDate(comment.timestamp)}</span>
                            </div>
                            <p className={styles.commentText}>{comment.comment}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}