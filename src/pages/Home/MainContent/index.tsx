/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { GoPlay } from 'react-icons/go';

import Instructions from '../Instructions';
import ScanArea from '../ScanArea';

import './styles.scss';

const MainContent: React.FC = () => {
  const [displayVideo, setDisplayVideo] = useState(false);

  return (
    <div className="container">
      <main>
        <section className="tutorial">
          <Instructions />
          <ScanArea />
        </section>
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
      </main>
    </div>
  );
};

export default MainContent;
