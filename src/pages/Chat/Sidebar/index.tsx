import React from 'react';
import { Search } from '@material-ui/icons';

import Header from './Header';
import Notification from './Notification';
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
      <div className="sidebar__search">
        <div className="search__area">
          <Search className="search__icon" />
          <input type="text" className="search__field" placeholder="Search or start new chat" />
        </div>
      </div>

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
