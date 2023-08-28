import React from 'react';

const YouTubeVideo = () => {
  const videoId = 'https://www.youtube.com/watch?v=a7it63FFDYQ'; 

  return (
    <div className="youtube-video">
      <iframe
        width="560" // Ancho del video en píxeles
        height="315" // Alto del video en píxeles
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
