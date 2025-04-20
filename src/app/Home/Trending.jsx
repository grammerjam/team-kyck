'use client';
import React, { useState, useEffect } from 'react';
import styles from './Trending.module.css';
import Image from 'next/image';

export function Trending() {
    const [trendingData, setTrendingData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the JSON file
        fetch('/assets/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                // Filter only trending items
                const trending = data.filter(item => item.isTrending);
                setTrendingData(trending);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching trending data:', err);
                setError(err.message);
                setLoading(false);
            });
    }, []); 

    if (loading) return <div className={styles.loading}>Loading trending content...</div>;
    if (error) return <div className={styles.error}>Error: {error}</div>;;
    const categoryName = {
        Movie: 'assets/icon-category-movie.svg',
        'TV Series' : 'assets/icon-category-tv.svg',
    };

    return (
        <div>
            <h2 className={styles.trending}>Trending</h2>
            <div className={styles.trendingContainer}>
                {trendingData.map((item, index) => (
                    <div key={index} className={styles.trendingItem}>
                        <div className={styles.thumbnailContainer}>
                            <Image
                                src={item.thumbnail.trending.large.replace('./', '/')}
                                alt={item.title}
                                width={470}
                                height={230}
                                className={styles.thumbnail}
                            />
                            <div className={styles.bookmarkIcon}>
                                {item.isBookmarked ? (
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
                            <div className={styles.overlay}>
                                <div className={styles.itemInfo}>
                                    <div className={styles.itemMeta}>
                                        <span>{item.year}</span>
                                        <span>•</span>
                                        <span style={{height: '12px', width: '12px', display: 'inline-block', marginTop: '4px'}}>
                                            <Image
                                            src={categoryName[item.category]}
                                            alt={item.category}
                                            width={12}
                                            height={12}
                                            />
                                        </span>
                                        <span> {item.category}</span>
                                        <span>•</span>
                                        <span>{item.rating}</span>
                                    </div>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}