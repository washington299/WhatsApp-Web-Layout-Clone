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
      {showModal === 'profile' && <SidebarModal screen="profile" title="Profile" showModal={setShowModal} />}
      {showModal === 'newChat' && <SidebarModal screen="newChat" title="New chat" showModal={setShowModal} />}
      {showModal === 'newGroup' && <SidebarModal screen="newGroup" title="Add group participants" showModal={setShowModal} />}
      {showModal === 'settings' && <SidebarModal screen="settings" title="Settings" showModal={setShowModal} />}
      {showModal === '' && (
        <>
          <Header showModal={setShowModal} />
          <Notification />
          <Search />
          <Chats />
        </>
      )}
    </aside>
  );
};

export default Sidebar;
