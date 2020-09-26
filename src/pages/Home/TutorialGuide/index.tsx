import React, { useState, useEffect } from 'react';
import QrCode from 'qrcode.react';
import { Replay, MoreVert, Settings } from '@material-ui/icons';

import './styles.scss';

const TutorialGuide: React.FC = () => {
  const [validQrCode, setValidQrCode] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const time = () => {
      let second = 1;
      const timer = setInterval(() => {
        second += 1;
        if (second === 60) {
          clearInterval(timer);
          setValidQrCode(false);
        }
      }, 1000);
    };
    time();
  }, []);

  function handleClick() {
    window.location.href = '/';
  }

  return (
    <section className="login">
      <div className="tutorial-guide">
        <h2 className="tutorial-guide__title">To use WhatsApp on your computer:</h2>
        <ul className="tutorial-guide__list">
          <li className="tutorial-guide__item">Open WhatsApp on your phone.</li>
          <li className="tutorial-guide__item">
            Tap
            {' '}
            <b>Menu</b>
            {' '}
            <MoreVert className="tutorial-guide__item--icon" />
            {' '}
            or
            {' '}
            <b>Settings</b>
            {' '}
            <Settings className="tutorial-guide__item--icon" />
            {' '}
            and select
            {' '}
            <b>WhatsApp Web.</b>
          </li>
          <li className="tutorial-guide__item">Point your phone to this screen to capture the code.</li>
        </ul>
        <a href="/" className="tutorial-guide__help-link">Need help to get started?</a>
      </div>
      <div className="scan">
        <div className="scan__qr-code" style={validQrCode ? { opacity: 1 } : { opacity: 0.05 }}>
          <QrCode size={250} value="http://192.168.0.105:3000/chat" />
        </div>
        <div className="scan__reload-qr-code">
          <div
            className="scan__circle"
            style={validQrCode ? { display: 'none' } : { display: 'flex' }}
            onClick={handleClick}
          >
            <Replay className="scan__reload-icon" />
            <span className="scan__reload-text">CLICK TO RELOAD QR CODE</span>
          </div>
        </div>
        <div className="reminder">
          <span className="reminder__arrow" style={isChecked ? { display: 'none' } : { display: 'block' }} />
          <input
            type="checkbox"
            onChange={() => setIsChecked(!isChecked)}
            checked={isChecked}
            className="reminder__check"
          />
          <span>Keep me signed in</span>
        </div>
        {!isChecked && (
          <div className="reminder__msg">You&apos;ll be logged out after several minutes of inativity</div>
        )}
      </div>
    </section>
  );
};

export default TutorialGuide;
