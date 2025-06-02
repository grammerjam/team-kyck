import {useState} from 'react';
import styles from './InteractiveStarRating.module.css';

export function InteractiveStarRating() {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const stars = [];
    const maxRating = 5;

    for (let i = 1; i <= maxRating; i++) {
        const isActive = i <= (hoveredRating || userRating);
        stars.push(
            <span
                key={i}
                className={`${styles.interactiveStar} ${isActive ? styles.starFilled : styles.starEmpty}`}
                onMouseEnter={() => setHoveredRating(i)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setUserRating(i)}
            >
                {isActive ? '★' : '☆'}
            </span>
        );
    }
    return (
        <div className={styles.ratingContainer}>
            {stars}
            <p className={styles.ratingText}>
                {rating > 0 ? `You rated this ${rating} star${rating > 1 ? 's' : ''}` : 'Rate this item'}
            </p>
        </div>
    );
}