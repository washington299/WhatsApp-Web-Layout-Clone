import React from 'react';
import {
  MdComputer, MdSearch, MdAttachment, MdMoreVert,
} from 'react-icons/md';

import { useChatScreenState } from '../../../contexts/chat-screen';
import { useContactsState } from '../../../contexts/contacts';

import './styles.scss';

const Body: React.FC = () => {
  const { display } = useChatScreenState();
  const { avatar, name, lastSeen } = useContactsState();

  return (
    <section className="body">
      {display && (
        <div className="body__chat">
          <header className="body__header">
            <div className="body__info">
              <img src={avatar} alt={name} className="body__profile-picture" />
              <div className="body__texts">
                <h2 className="body__name">{name}</h2>
                <span className="body__lastSeen">{`last seen today ${lastSeen}`}</span>
              </div>
            </div>
            <div className="body__options">
              <MdSearch className="body__item" />
              <MdAttachment className="body__item" />
              <MdMoreVert className="body__item" />
            </div>
          </header>
          <section className="body__messages">Body messages</section>
          <div className="body__text-area">Body text area</div>
        </div>
      )}
      {!display && (
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
      )}
    </section>
  );
};

export default Body;
