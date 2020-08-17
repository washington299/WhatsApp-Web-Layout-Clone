import React from 'react';
import { MdComputer } from 'react-icons/md';

import { useChatScreenState } from '../../../contexts/chat-screen';

import './styles.scss';

const Body: React.FC = () => {
  const { display } = useChatScreenState();

  return (
    <section className="body">
      {display && (
        <div className="body__chat">
          <header className="body__header">Body header</header>
          <section className="body__messages">Body messages</section>
          <div className="body__text-area">Body text area</div>
        </div>
      )}
      <div className="body__screen">
        <img
          src="assets/images/whatsapp-initial-connection.jpg"
          alt="Whatsapp connection"
          className="body__initial-img"
        />
        <h1 className="body__initial-title">Keep your phone connected</h1>
        <p className="body__initial-text">
          WhatsApp connects to your phone to sync message. To reduce data usage, connect your
          phone to Wi-Fi.
        </p>
        <hr />
        <MdComputer className="body__initial-icon" />
        <span className="body__initial-span">
          WhatsApp is available for Windows.
          <a href="/" className="body__initial-windows-link">Get it here.</a>
        </span>
      </div>
    </section>
  );
};

export default Body;
