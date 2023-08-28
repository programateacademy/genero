import React from 'react';

const YouTubeVideo = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="youtube-video embed-responsive embed-responsive-16by9">
      <iframe
        title="YouTube Video"
        className="embed-responsive-item"
        src={embedUrl}
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeVideo;

