import * as React from 'react';
import Image from 'next/image';
import styles from './RecommendedForYou.module.css';

export function RecommendedForYou() {
    const [allShows, setAllShows] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        // Fetch data from the JSON file
        fetch('http://localhost:3000/api/recommendedForYou', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            // Use all shows from data.json
            setAllShows(data);
            setLoading(false);
        })
        .catch(err => {
            console.error('Error fetching shows:', err);
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) return <div className={styles.loading}>Loading content...</div>;
    if (error) return <div className={styles.error}>Error: {error}</div>;

    // Filter out trending items for the grid display
    const regularShows = allShows.filter(item => !item.isTrending);
    const categoryName = {
        Movie: 'assets/icon-category-movie.svg',
        'TV Series' : 'assets/icon-category-tv.svg',
    };

    return (
        <div>
            <h2 className={styles.recommended}>Recommended For You</h2>
            <div className={styles.grid}>
                {regularShows.map((show, index) => (
                    <div key={index} className={styles.gridItem}>
                        <div className={styles.thumbnailWrapper}>
                            <img 
                                src={show.thumbnail.regular.large.replace('./', '/')}
                                alt={show.title}
                                className={styles.thumbnail}
                            />
                            <div className={styles.bookmarkIcon}>
                                {show.isBookmarked ? (
                                    <Image src="/assets/icon-bookmark-full.svg" alt="Bookmark" width={15} height={15} />
                                ) : (
                                    <Image src="/assets/icon-bookmark-empty.svg" alt="Bookmark" width={15} height={15} />
                                )}                
                            </div>
                            {/* Add hover overlay with play button */}
                            <div className={styles.hoverOverlay}>
                                <div className={styles.playButton}>
                                    <Image src="/assets/icon-play.svg" alt="Play" width={30} height={30} />
                                    <span>Play</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.showInfo}>
                            <div className={styles.showMeta}>
                                <span>{show.year}</span>
                                <span>•</span>
                                <span style={{height: '12px', width: '12px', display: 'inline-block'}}>
                                    <Image
                                        src={categoryName[show.category]}
                                        alt={show.category}
                                        width={12}
                                        height={12}
                                    />
                                </span>
                                <span> {show.category}</span>
                                <span>•</span>
                                <span>{show.rating}</span>
                            </div>
                            <h3 className={styles.showTitle}>{show.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}