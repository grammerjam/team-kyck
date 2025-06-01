import {useEffect, useState, useRef} from 'react';
import styles from './Comments.module.css';

export function Comments(){
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [commentText, setCommentText] = useState('');
    const textareaRef = useRef(null);

    // Auto-resize textarea function
    const handleTextareaChange = (e) => {
        setCommentText(e.target.value);
        
        // Reset height to auto to get the correct scrollHeight
        e.target.style.height = 'auto';
        // Set height to scrollHeight to fit content
        e.target.style.height = e.target.scrollHeight + 'px';
    };

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

    // Generate star rating display
    const renderStars = (rating) => {
        const stars = [];
        const maxRating = 5;
        
        for (let i = 1; i <= maxRating; i++) {
            if (i <= rating) {
                // Filled star
                stars.push(<span key={i} className={styles.starFilled}>★</span>);
            } else {
                // Empty star
                stars.push(<span key={i} className={styles.starEmpty}>☆</span>);
            }
        }
        
        return <div className={styles.starRating}>{stars}</div>;
    };

    return(
        <>
            <h1 className={styles.commentSectionTitle}>{comments.length} Comments</h1>
            <div className={styles.commentSection}>
                <img src="assets/image-avatar.png" alt="Avatar" className={styles.avatar} />
                <div className={styles.commentInputContainer}>
                    <textarea 
                        ref={textareaRef}
                        className={styles.commentInput} 
                        placeholder="Add a comment..." 
                        value={commentText}
                        onChange={handleTextareaChange}
                        rows={2}
                    />
                    <button className={styles.submitButton}>Submit</button>
                </div>
            </div>
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
                                <a href="/profile" className={styles.profileLink}>
                                    <img src="assets/image-avatar.png" 
                                    alt="Home" />
                                </a>
                                <span className={styles.username}>{comment.user}</span>
                                <div className={styles.rating}>{comment.rating && renderStars(comment.rating)}</div>
                                <span className={styles.timestamp}>{formatDate(comment.timestamp)}</span>
                            </div>
                            {/* Display star rating */}
                            <p className={styles.commentText}>{comment.comment}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}