import React from 'react';

import Sidebar from './Sidebar';
import Body from './Body';

import './styles.scss';

const Chat: React.FC = () => {
  const user = {
    id: 1234,
    avatar: '',
    name: 'Washington Campos',
  };

  return (
    <div className="chat">
      <Sidebar />
      <Body user={user} />
    </div>
  );
};

export default Chat;
