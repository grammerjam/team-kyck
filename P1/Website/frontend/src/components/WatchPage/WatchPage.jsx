import {useEffect, useState} from 'react';
import {Videos} from '../../utils/Videos';

export default function WatchPage() {
    const [showInfor, setShowInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the JSON file
        fetch('api/showInfo/id?id=1', {
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

    if (loading) return <div >Loading trending content...</div>;
    if (error) return <div >Error: {error}</div>;
    return (
        <>
            <h1>{showInfor.title}</h1>
            <span>Year: {showInfor.year}</span>
            <span>Category: {showInfor.category}</span>
            <span>Rating: {showInfor.rating}</span>
            <Videos />
        </>
    );
}