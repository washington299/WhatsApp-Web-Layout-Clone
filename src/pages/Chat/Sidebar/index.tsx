import React, { useState } from 'react';
import { NotificationsOff, NotificationsActive, Search } from '@material-ui/icons';

import Header from './Header';
import Contact from '../../../components/Contact';

import { Contacts } from '../../../utils/data';
import { useChatScreenState } from '../../../contexts/chat-screen';

import './styles.scss';

const Sidebar: React.FC = () => {
  const { display } = useChatScreenState();
  const [notificationActive, setNotificationActive] = useState(false);

  return (
    <aside className="sidebar" style={display && window.innerWidth < 768 ? { display: 'none' } : { display: 'flex' }}>
      <Header />

      <div className="sidebar__notification">
        <div className="notification__circle">
          {
            notificationActive
              ? <NotificationsActive className="notification__icon" />
              : <NotificationsOff className="notification__icon" />
          }
        </div>
        <div className="notification__texts">
          <span className="notification__title">Get notified of new messages</span>
          <span
            className="notification__button"
            onClick={() => setNotificationActive(!notificationActive)}
          >
            Turn
            {notificationActive ? ' off ' : ' on '}
            Desktop notifications
            <strong style={{ marginLeft: '3px' }}>&gt;</strong>
          </span>
        </div>
      </div>

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
