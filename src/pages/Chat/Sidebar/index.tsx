import React from 'react';

import Header from './Header';
import Notification from './Notification';
import Search from './Search';
import Chats from './Chats';

import { useChatScreenState } from '../../../contexts/chat-screen';

import './styles.scss';

const Sidebar: React.FC = () => {
  const { display } = useChatScreenState();

  return (
    <aside className="sidebar" style={display && window.innerWidth < 768 ? { display: 'none' } : { display: 'flex' }}>
      <Header />
      <Notification />
      <Search />
      <Chats />
    </aside>
  );
};

export default Sidebar;
