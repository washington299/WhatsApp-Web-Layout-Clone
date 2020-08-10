import React, { useState } from 'react';
import {
  MdDonutLarge,
  MdChat,
  MdMoreVert,
  MdNotificationsOff,
  MdNotificationsActive,
  MdSearch,
} from 'react-icons/md';

import './styles.scss';

const Sidebar: React.FC = () => {
  const [notificationActive, setNotificationActive] = useState<boolean>(false);

  return (
    <aside className="sidebar">
      <header className="sidebar__header">
        <img
          src="./assets/images/avatar/avatar-man-1.png"
          alt="My Profile"
          className="sidebar__profile-picture"
        />
        <div className="sidebar__options">
          <MdDonutLarge className="options__item" />
          <MdChat className="options__item" />
          <MdMoreVert className="options__item" />
        </div>
      </header>

      <div className="sidebar__notification">
        <div className="notification__circle">
          {
            notificationActive
              ? <MdNotificationsActive className="notification__icon" />
              : <MdNotificationsOff className="notification__icon" />
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
          <MdSearch className="search__icon" />
          <input type="text" className="search__field" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar__contacts">Contact</div>
    </aside>
  );
};

export default Sidebar;
