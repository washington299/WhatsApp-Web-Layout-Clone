import React from 'react';

import './styles.scss';

const Sidebar: React.FC = () => (
  <aside className="sidebar">
    <header className="sidebar__header">Header</header>
    <div className="sidebar__notification">Notification</div>
    <div className="sidebar__search">Search</div>
    <div className="sidebar__contacts">Contact</div>
  </aside>
);

export default Sidebar;
