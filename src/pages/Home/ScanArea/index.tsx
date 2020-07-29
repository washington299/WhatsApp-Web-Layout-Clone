import React, { useState, useEffect } from 'react';
import { BsArrowClockwise } from 'react-icons/bs';

import './styles.scss';

const ScanArea: React.FC = () => {
  const [validQrCode, setValidQrCode] = useState(true);

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
    <section className="scan-area">
      <div className="qr_code-area" style={validQrCode ? { opacity: 1 } : { opacity: 0.05 }}>
        <img src="assets/images/qr-code.png" alt="" />
      </div>
      <div className="reload-qr-code">
        <div
          className="circle"
          style={validQrCode ? { display: 'none' } : { display: 'flex' }}
          onClick={handleClick}
        >
          <BsArrowClockwise />
          <span>CLICK TO RELOAD QR CODE</span>
        </div>
      </div>
      <div className="reminder-box">
        <input type="checkbox" />
        <span>Keep me signed in</span>
      </div>
      <div className="info-msg">You&apos;ll be logged out after several minutes of inativity</div>
    </section>
  );
};

export default ScanArea;
