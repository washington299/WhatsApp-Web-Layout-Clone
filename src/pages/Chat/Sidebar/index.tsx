import React from 'react';

import Header from './Header';
import Notification from './Notification';
import Search from './Search';
import Contact from '../../../components/Contact';

import { Contacts } from '../../../utils/data';
import { useChatScreenState } from '../../../contexts/chat-screen';

import './styles.scss';

const Sidebar: React.FC = () => {
  const { display } = useChatScreenState();

  return (
    <aside className="sidebar" style={display && window.innerWidth < 768 ? { display: 'none' } : { display: 'flex' }}>
      <Header />
      <Notification />
      <Search />

      <div className="sidebar__contacts">
        {Contacts.map(({
          id, name, avatar, lastMessage, timeLastMessage, lastSeen, pinned, mute, unreadMessages,
        }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            avatar={avatar}
            lastMessage={lastMessage}
            timeLastMessage={timeLastMessage}
            lastSeen={lastSeen}
            pinned={pinned}
            mute={mute}
            unreadMessages={unreadMessages}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
