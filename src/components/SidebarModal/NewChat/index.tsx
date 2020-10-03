import React from 'react';
import { Search, GroupAdd } from '@material-ui/icons';

import FindContacts from '../FindContacts';

import './styles.scss';

const NewChat = () => (
  <section className="newChat">
    <div className="newChat__search">
      <div className="newChat__search-area">
        <Search className="newChat__icon--search" />
        <input type="text" placeholder="Search contacts" className="newChat__input" />
      </div>
    </div>
    <div className="newChat__newGroup-add">
      <GroupAdd className="newChat__icon--group-add" />
      <div className="newChat__text">New Group</div>
    </div>
    <FindContacts />
  </section>
);

export default NewChat;
