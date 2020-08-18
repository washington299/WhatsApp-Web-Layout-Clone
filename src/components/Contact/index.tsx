import React, { useState } from 'react';
import { MdColorize, MdVolumeOff, MdExpandMore } from 'react-icons/md';

import { IContacts } from '../../interface';
import { useChatScreenDispatch } from '../../contexts/chat-screen';
import { useContactsDispatch } from '../../contexts/contacts';

import './styles.scss';

type Props = IContacts;

const Contact: React.FC<Props> = ({
  name, avatar, lastMessage, timeLastMessage, lastSeen, pinned, mute, unreadMessages,
}) => {
  const [hidden, setHidden] = useState<boolean>(!!unreadMessages);
  const dispatchUnreadMessages = useChatScreenDispatch();
  const dispatchContactsData = useContactsDispatch();

  function handleClick() {
    dispatchContactsData({
      type: 'SET_CONTACTS_DATA',
      payload: {
        name,
        avatar,
        lastMessage,
        timeLastMessage,
        lastSeen,
        pinned,
        mute,
        unreadMessages,
      },
    });
    dispatchUnreadMessages({
      type: 'DISPLAY',
    });
    setHidden(false);
  }

  return (
    <div className="contacts__container" onClick={handleClick}>
      <img src={avatar} alt={name} className="contacts__img" />
      <div className="contacts__texts">
        <h3 className="texts__name">{name}</h3>
        <span className="texts__lastMessage">{lastMessage}</span>
      </div>
      <div className="contacts__details">
        <span className="details__time">{timeLastMessage}</span>
        {pinned && <MdColorize className="details__icon" />}
        {mute && <MdVolumeOff className="details__icon" />}
        {hidden && (
          <div className="details__unreadMessage">
            {unreadMessages}
          </div>
        )}
        <MdExpandMore className="details__icon options" />
      </div>
    </div>
  );
};

export default Contact;
