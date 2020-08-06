import React from 'react';

import Sidebar from './Sidebar';
import Body from './Body';

import './styles.scss';

const Chat: React.FC = () => (
  <div className="chat">
    <Sidebar />
    <Body />
  </div>
  //  Sidebar
  //    header
  //    remind notification
  //    search messages
  //    contacts area
  //      contact chat
  //  Body
  //    header
  //    messages area
  //    text area
);

export default Chat;
