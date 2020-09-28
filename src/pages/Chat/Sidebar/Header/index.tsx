import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Avatar } from '@material-ui/core';
import { DonutLarge, Chat, MoreVert } from '@material-ui/icons';

import './styles.scss';

const SidebarHeader = () => {
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
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
  );
};

export default SidebarHeader;
