import { useState, useRef, useEffect } from 'react';
import styles from './Videos.module.css';

export function Videos() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  
  // Placeholder video URL
  const videoUrl = "/assets/sample-video.mp4";
  
  // Placeholder thumbnail
  const thumbnailUrl = "/assets/thumbnails/sample-thumbnail.jpg";
  
  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  // Add this effect to play the video after it's rendered
  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play().catch(err => console.error("Autoplay failed:", err));
    }
  }, [isPlaying]);

  return (
    <div className={styles.videoContainer}>
      {!isPlaying ? (
        <div 
          onClick={handleVideoClick}
          className={styles.thumbnailWrapper}
        >
          <img 
            src={thumbnailUrl} 
            alt="Video thumbnail" 
            className={styles.thumbnailImage}
          />
          <div className={styles.playButton}>
            <div className={styles.playIcon}></div>
          </div>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={videoUrl}
          onClick={handleVideoClick}
          controls
          className={styles.videoElement}
          autoPlay
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}



