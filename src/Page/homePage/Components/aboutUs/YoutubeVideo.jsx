import React from 'react';

const YouTubeVideo = () => {
  const videoId = 'https://www.youtube.com/watch?v=a7it63FFDYQ'; // Reemplaza con el ID de tu video de YouTube

  return (
    <div className="youtube-video">
      <iframe
        width="560" // Ancho del video en píxeles
        height="315" // Alto del video en píxeles
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
