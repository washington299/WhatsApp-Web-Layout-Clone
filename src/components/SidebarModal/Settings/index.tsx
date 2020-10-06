import React from 'react';
import { Avatar } from '@material-ui/core';
import {
  Notifications, Brightness6, Wallpaper, Block, Help,
} from '@material-ui/icons';

import './styles.scss';

const Settings = () => (
  <section className="settings">
    <div className="settings__profile">
      <Avatar className="settings__picture" />
      <span className="settings__description">
        Washington Campos
        {' '}
        <span role="img" aria-label="baby">👶</span>
      </span>
    </div>
    <div className="settings__actions">
      <div className="settings__option">
        <Notifications className="settings__icon" />
        <span className="settings__text">Notifications</span>
      </div>
      <div className="settings__option">
        <Brightness6 className="settings__icon" />
        <span className="settings__text">Themes</span>
      </div>
      <div className="settings__option">
        <Wallpaper className="settings__icon" />
        <span className="settings__text">Chat Wallpaper</span>
      </div>
      <div className="settings__option">
        <Block className="settings__icon" />
        <span className="settings__text">Blocked</span>
      </div>
      <div className="settings__option">
        <Help className="settings__icon" />
        <span className="settings__text">help</span>
      </div>
    </div>
  </section>
);

export default Settings;
