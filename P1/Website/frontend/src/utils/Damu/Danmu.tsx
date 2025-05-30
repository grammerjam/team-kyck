import {useEffect, useState, useRef} from 'react';
import styles from './Danmu.module.css';


interface DanmuProps {
    danmu: string; // The danmu text
    currentTime: number; // The current time in seconds
    containerWidth: number; // The width of the container in pixels
    index: number; // The index of the danmu in the list
};

export function Danmu(DanmuProps: DanmuProps) {
    const danmuRef = useRef<HTMLDivElement>(null);
    // start position at the right edge of the container
    const [position, setPosition] = useState({x: DanmuProps.containerWidth, y: 0});

    useEffect(() => {

    })


    return (
        <div
            ref={danmuRef}
            className={styles.danmu}
            style={{

                color
        
    )
}