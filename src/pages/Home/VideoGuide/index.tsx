/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { PlayCircleFilled } from '@material-ui/icons';

import './styles.scss';

const VideoGuide: React.FC = () => {
  const [displayVideo, setDisplayVideo] = useState(false);

  return (
    <section className="video">
      <div className="video__area">
        {!displayVideo && (
          <div className="video__play-button-area">
            <div className="video__play-button" onClick={() => setDisplayVideo(true)}>
              <PlayCircleFilled className="video__icon" />
            </div>
          </div>
        )}
        <img
          src="assets/images/video-thumbnail.jpg"
          alt="WhatsApp video thumbnail"
          crossOrigin="anonymous"
          className="video__thumb"
          style={displayVideo ? { display: 'none' } : { display: 'block' }}
        />
        {displayVideo && (
          <video autoPlay controls controlsList="nodownload" className="video__original-clip">
            <track kind="captions" />
            <source src="https://web.whatsapp.com/whatsapp-webclient-login_a0f99e8cbba9eaa747ec23ffb30d63fe.mp4" />
          </video>
        )}
      </div>
    </section>
  );
};

export default VideoGuide;
