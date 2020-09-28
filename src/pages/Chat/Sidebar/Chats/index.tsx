import React from 'react';

import Contact from '../../../../components/Contact';
import { Contacts } from '../../../../utils/data';

import './styles.scss';

const SidebarChats = () => (
  <div className="sidebar__chats">
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
);

export default SidebarChats;
