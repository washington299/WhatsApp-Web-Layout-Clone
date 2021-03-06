import React, { useState } from 'react';

import Header from './Header';
import Notification from './Notification';
import Search from './Search';
import Chats from './Chats';

import SidebarModal from '../../../components/SidebarModal';
import { useChatScreenState } from '../../../contexts/chat-screen';

import './styles.scss';

const Sidebar: React.FC = () => {
  const { display } = useChatScreenState();
  const [showModal, setShowModal] = useState('');

  return (
    <aside
      className="sidebar"
      style={display && window.innerWidth < 768 ? { display: 'none' } : { display: 'flex' }}
    >
      <div className="default">
        <Header showModal={setShowModal} />
        <Notification />
        <Search />
        <Chats />
      </div>
      <SidebarModal showModal={showModal} setShowModal={setShowModal} />
      <SidebarModal showModal={showModal} setShowModal={setShowModal} />
      <SidebarModal showModal={showModal} setShowModal={setShowModal} />
      <SidebarModal showModal={showModal} setShowModal={setShowModal} />
    </aside>
  );
};

export default Sidebar;
