import { useState, useRef, useEffect } from 'react';
import styles from './Videos.module.css';
import { Danmu } from './Damu/Danmu';

export function Videos({videoId}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const videoUrl = "/assets/sample-video.mp4";
  const [thumbnailUrl, setThumbnail] = useState(null); 

 // Danmu states
  const [danmuList, setDanmuList] = useState([]);
  const [newDanmu, setNewDanmu] = useState('');
  const [showDanmu, setShowDanmu] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch(`api/showInfo/id?id=${videoId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch video data');
      }
      return response.json();
    })
    .then(data => {
      // Assuming the video URL is in the response data
      setThumbnail(data.thumbnailUrl);
    })
    .catch(err => {
      console.error('Error fetching video data:', err);
    });
  });

  useEffect(() => {
    fetch('assets/danmu.json')
      .then(response => response.json())
      .then(data => {
        setDanmuList(data);
      })
      .catch(err => {
        console.error('Error fetching danmu data:', err);
      });
  })
  
  const handleVideoClick = () => {
    setIsPlaying(true);

  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  }

  const handleDanmuSubmit = (e) => {
    e.preventDefault();
  }

  // Function to get visible danmu based on current time
  const getVisibleDanmu = () => {
    const DISPLAY_DURATION = 5; // seconds
    return danmuList.filter(danmu => 
      currentTime >= danmu.time && 
      currentTime <= danmu.time + DISPLAY_DURATION
    );
  };

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
          onTimeUpdate={handleTimeUpdate}
          controls
          className={styles.videoElement}
          autoPlay
        >
          Your browser does not support the video tag.
        </video>
      )}
      { /* Danmu Overlay */}
      {showDanmu && (
        <div className={styles.danmuOverlay}
        onClick={handleVideoClick}>
          {getVisibleDanmu().map((danmu, index) => (
            <Danmu 
              key={`${danmu.id}-${danmu.time}`}
              danmu={danmu}
              currentTime={currentTime}
              index={index}            
              containerWidth={videoRef.current?.offsetWidth || 800}
            />
          ))}
        </div>
      )}
      {/* Danmu Controls */}
      <div className={styles.danmuControls}>
        <form onSubmit={handleDanmuSubmit} className={styles.danmuForm}>
          <input
            type="text"
            value={newDanmu}
            onChange={(e) => setNewDanmu(e.target.value)}
            placeholder="send a danmu"
            className={styles.danmuInput}
            maxLength={50}
          />
          <button type="submit" className={styles.danmuSubmit}>
            send
          </button>
        </form>
        <button 
          onClick={() => setShowDanmu(!showDanmu)}
          className={`${styles.danmuToggle} ${!showDanmu ? styles.danmuOff : ''}`}
        >
          Danmu {showDanmu ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  );
}

