/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { GoPlay } from 'react-icons/go';

import './styles.scss';

const VideoArea: React.FC = () => {
  const [displayVideo, setDisplayVideo] = useState(false);

  return (
    <section className="video-area">
      <div className="video-box">
        {!displayVideo && (
          <div className="play-button-area">
            <div className="play-button" onClick={() => setDisplayVideo(true)}>
              <GoPlay />
            </div>
          </div>
        )}
        <img
          src="assets/images/video-thumbnail.jpg"
          alt="WhatsApp video thumbnail"
          crossOrigin="anonymous"
          style={displayVideo ? { display: 'none' } : { display: 'block' }}
        />
        {displayVideo && (
          <video autoPlay controls controlsList="nodownload">
            <track kind="captions" />
            <source src="https://web.whatsapp.com/whatsapp-webclient-login_a0f99e8cbba9eaa747ec23ffb30d63fe.mp4" />
          </video>
        )}
      </div>
    </section>
  );
};

export default VideoArea;
