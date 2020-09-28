import React, { useState } from 'react';
import { NotificationsOff, NotificationsActive } from '@material-ui/icons';

import './styles.scss';

const SidebarNotification = () => {
  const [notificationActive, setNotificationActive] = useState(false);

  return (
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
  );
};

export default SidebarNotification;
