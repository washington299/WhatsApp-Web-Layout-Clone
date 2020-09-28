import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Avatar } from '@material-ui/core';
import {
  DonutLarge,
  Chat,
  MoreVert,
  NotificationsOff,
  NotificationsActive,
  Search,
} from '@material-ui/icons';

import { Contacts } from '../../../utils/data';
import Contact from '../../../components/Contact';

import { useChatScreenState } from '../../../contexts/chat-screen';

import './styles.scss';

const Sidebar: React.FC = () => {
  const { display } = useChatScreenState();
  const [notificationActive, setNotificationActive] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <aside className="sidebar" style={display && window.innerWidth < 768 ? { display: 'none' } : { display: 'flex' }}>
      <header className="sidebar__header">
        <Avatar />
        <div className="sidebar__options">
          <IconButton>
            <DonutLarge className="options__item" />
          </IconButton>
          <IconButton>
            <Chat className="options__item" />
          </IconButton>
          <IconButton onClick={() => setOpenDropDown(!openDropDown)}>
            <MoreVert className="options__item" />
            <div
              className="sidebar__dropdown"
              style={openDropDown ? { display: 'block' } : { display: 'none' }}
            >
              <div className="sidebar__action">New group</div>
              <div className="sidebar__action">Profile</div>
              <div className="sidebar__action">Settings</div>
              <Link to="/" style={{ textDecoration: 'none', color: '#585858' }}>
                <div className="sidebar__action">Log out</div>
              </Link>
            </div>
          </IconButton>
        </div>
      </header>

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
