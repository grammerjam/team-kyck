import {useEffect, useState} from 'react';
import {Videos} from '../../utils/Videos';
import {Comments} from '../../utils/Comments';
import styles from './WatchPage.module.css';
import { useSearchParams } from 'react-router-dom';

export default function WatchPage() {
    const [showInfor, setShowInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id') || '1'; // Default to 1 if no id is provided

    useEffect(() => {
        // Fetch data from the JSON file
        fetch(`api/showInfo/id?id=${id}`, {
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
            setShowInfo(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) return <div style={{color: 'white'}}>Loading trending content...</div>;
    if (error) return <div  style={{color: 'white'}} >Error: {error}</div>;
    return (
        <>
            <div className={styles.videoMetadata}>
                <h1 className={styles.showTitle}>{showInfor.title}</h1>
                <div className={styles.showInfo}>
                    <span>Year: {showInfor.year}</span>
                    <span>Category: {showInfor.category}</span>
                    <span>Rating: {showInfor.rating}</span>
                </div>
            </div>
            <Videos />
            <Comments />
        </>
    );
}