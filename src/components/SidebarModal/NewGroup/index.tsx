import React from 'react';

import FindContacts from '../FindContacts';

import './styles.scss';

const NewGroup = () => (
  <div className="newGroup">
    <input type="text" placeholder="Type contact name" className="newGroup__search" />
    <FindContacts />
  </div>
);

export default NewGroup;
