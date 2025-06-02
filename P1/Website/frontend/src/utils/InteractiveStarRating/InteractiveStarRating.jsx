import {useState} from 'react';
import styles from './InteractiveStarRating.module.css';
import {StarIcon} from '@heroicons/react/24/solid';

export function InteractiveStarRating() {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const stars = [];
    const maxRating = 5;

    for (let i = 1; i <= maxRating; i++) {
        stars.push(
            <StarIcon
                key={i}
                className={`${styles.star} ${i <= (hoveredRating || rating) ? styles.filled : ''}`}
                onMouseEnter={() => setHoveredRating(i)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setRating(i)}
            />
        );
    }
}