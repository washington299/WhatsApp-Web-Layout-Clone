import React from 'react';
import { Search, GroupAdd } from '@material-ui/icons';

import FindContacts from '../FindContacts';

import './styles.scss';

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
};

const NewChat = ({ setShowModal }: Props) => (
  <section className="newChat">
    <div className="newChat__search">
      <div className="newChat__search-area">
        <div>
          <Search className="newChat__icon--search" />
        </div>
        <input type="text" placeholder="Search contacts" className="newChat__input" />
      </div>
    </div>
    <div className="newChat__newGroup-add" onClick={() => setShowModal('New group')}>
      <div className="newChat__icon--group-add">
        <GroupAdd />
      </div>
      <div className="newChat__text">New Group</div>
    </div>
    <FindContacts />
  </section>
);

export default NewChat;
