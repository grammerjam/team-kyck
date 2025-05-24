import { useState, useRef, useEffect } from 'react';

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
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {!isPlaying ? (
        <div 
          onClick={handleVideoClick}
          style={{ 
            position: 'relative', 
            cursor: 'pointer',
            borderRadius: '8px',
            overflow: 'hidden'
          }}
        >
          <img 
            src={thumbnailUrl} 
            alt="Video thumbnail" 
            style={{ width: '100%', display: 'block' }}
          />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '0',
              height: '0',
              borderTop: '10px solid transparent',
              borderBottom: '10px solid transparent',
              borderLeft: '20px solid white',
              marginLeft: '5px'
            }}></div>
          </div>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={videoUrl}
          onClick={handleVideoClick}
          controls
          style={{ width: '100%', borderRadius: '8px' }}
          autoPlay
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}



