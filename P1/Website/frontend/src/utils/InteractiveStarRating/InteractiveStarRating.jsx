import {useState} from 'react';
import styles from './InteractiveStarRating.module.css';

export function InteractiveStarRating() {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const stars = [];
    const maxRating = 5;

    for (let i = 1; i <= maxRating; i++) {
        const isActive = i <= (hoveredRating || rating);
        stars.push(
            <span
                key={i}
                className={`${styles.interactiveStar} ${isActive ? styles.starFilled : styles.starEmpty}`}
                onMouseEnter={() => setHoveredRating(i)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setRating(i)}
            >
                {isActive ? '★' : '☆'}
            </span>
        );
    }
    return(
            <div className={styles.interactiveStarContainer}>
                <span className={styles.ratingLabel}>Rate: </span>
                <div className={styles.starRating}>{stars}</div>
                {rating > 0 && (
                    <span className={styles.selectedRating}>({rating} star{rating !== 1 ? 's' : ''})</span>
                )}
            </div>
        );
}