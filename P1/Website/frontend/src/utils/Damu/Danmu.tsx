import {useEffect, useState, useRef} from 'react';
import  './Danmu.css';


interface DanmuProps {
    danmu: {
        color: string; // The color of the danmu text
        text: string; // The danmu text
        time: number; // The time when the danmu should appear in seconds
    }; // The danmu text
    currentTime: number; // The current time in seconds
    containerWidth: number; // The width of the container in pixels
    index: number; // The index of the danmu in the list
};

export function Danmu(DanmuProps: DanmuProps) {
    const danmuRef = useRef<HTMLDivElement>(null);
    // start position at the right edge of the container
    const [position, setPosition] = useState({x: DanmuProps.containerWidth, y: 0});

    useEffect(() => {
        if (!danmuRef.current) return;
        const startTime = DanmuProps.danmu.time;
        const elapsedTime = DanmuProps.currentTime - startTime;
        const duration = 5;
        // Calculate the position based on the elapsed time
        const progress = Math.min(elapsedTime / duration, 1); // Ensure progress does not exceed 1
        const itemWidth = danmuRef.current.offsetWidth; // Get the width of the danmu item
        let newX = DanmuProps.containerWidth - (progress * (DanmuProps.containerWidth + itemWidth)); // Calculate new X position
        // Left bound: don't go further left than -itemWidth (completely off screen)
        // Right bound: don't start beyond container width
        newX = Math.max(-itemWidth, Math.min(DanmuProps.containerWidth, newX));
        const newY = (DanmuProps.index % 10) * 40 + 20; // 10 tracks, 40px apart
        setPosition({x: newX, y: newY});
    }, [DanmuProps.currentTime, DanmuProps.containerWidth, DanmuProps.index, DanmuProps.danmu.time]);


    return (
        <div
            ref={danmuRef}
            className='danmu'
            style={{
                color: DanmuProps.danmu.color || 'white',
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        >
            {DanmuProps.danmu.text}
        </div>
        
    )
}