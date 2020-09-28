import React from 'react';
import { Computer } from '@material-ui/icons';

import './styles.scss';

type Props = {
  display: boolean;
};

const BodyInitialScreen = ({ display }: Props) => (
  <section className="initial-screen" style={display ? { display: 'none' } : { flex: 1, display: 'block' }}>
    <div className="initial-screen__area">
      <img
        src="assets/images/whatsapp-initial-connection.jpg"
        alt="Whatsapp connection"
        className="initial-screen__img"
      />
      <h1 className="initial-screen__title">Keep your phone connected</h1>
      <p className="initial-screen__text">
        WhatsApp connects to your phone to sync message. To reduce data usage, connect your
        phone to Wi-Fi.
      </p>
      <hr />
      <Computer className="initial-screen__icon" />
      <span className="initial-screen__span">
        WhatsApp is available for Windows.
        <a href="/" className="initial-screen__windows-link">Get it here.</a>
      </span>
    </div>
  </section>
);

export default BodyInitialScreen;
