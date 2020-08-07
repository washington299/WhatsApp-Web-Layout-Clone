import React from 'react';
import { MdDonutLarge, MdChat, MdMoreVert } from 'react-icons/md';

import './styles.scss';

const Sidebar: React.FC = () => (
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
    <div className="sidebar__notification">Notification</div>
    <div className="sidebar__search">Search</div>
    <div className="sidebar__contacts">Contact</div>
  </aside>
);

export default Sidebar;
