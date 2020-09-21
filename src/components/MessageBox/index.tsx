import React from 'react';

import './styles.scss';

type Props = {
  msg: { author: number, body: string };
  user: {
    id: number;
    avatar: string;
    name: string;
  };
};

const MessageBox = ({ msg, user }: Props) => (
  <div
    className="message"
    style={user.id === msg.author ? { justifyContent: 'flex-end' } : { justifyContent: 'flex-start' }}
  >
    <div
      className="message__item"
      style={user.id === msg.author ? { backgroundColor: '#DCF8C6' } : { backgroundColor: '#FFFFFF' }}
    >
      <div className="message__text">{msg.body}</div>
      <div className="message__date">19:50</div>
    </div>
  </div>
);

export default MessageBox;
