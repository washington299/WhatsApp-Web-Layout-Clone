import React from 'react';

import Sidebar from './Sidebar';
import Body from './Body';

import './styles.scss';

const Chat: React.FC = () => (
  <div className="chat">
    <Sidebar />
    <Body />
  </div>
);

export default Chat;
