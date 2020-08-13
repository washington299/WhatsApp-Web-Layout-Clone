import React from 'react';
import { MdColorize, MdVolumeOff, MdExpandMore } from 'react-icons/md';

import { IContacts } from '../../interface';

import './styles.scss';

type Props = IContacts;

const Contact: React.FC<Props> = ({
  name, avatar, lastMessage, timeLastMessage, pinned, mute, unreadMessages,
}) => (
  <div className="contacts__container">
    <img src={avatar} alt={name} className="contacts__img" />
    <div className="contacts__texts">
      <h3 className="texts__name">{name}</h3>
      <span className="texts__lastMessage">{lastMessage}</span>
    </div>
    <div className="contacts__details">
      <span className="details__time">{timeLastMessage}</span>
      {pinned && <MdColorize className="details__icon" />}
      {mute && <MdVolumeOff className="details__icon" />}
      {unreadMessages && <div className="details__unreadMessage">{unreadMessages}</div>}
      <MdExpandMore className="details__icon options" />
    </div>
  </div>
);

export default Contact;
