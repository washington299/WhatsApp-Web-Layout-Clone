import React from 'react';
import { ArrowBack } from '@material-ui/icons';

import Profile from './Profile';
import NewChat from './NewChat';
import NewGroup from './NewGroup';
import Settings from './Settings';

import './styles.scss';

type Props = {
  showModal: string;
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
};

const SidebarModal = ({ showModal, setShowModal }: Props) => (
  <div className="modal" style={{ left: showModal !== '' ? 0 : -768 }}>
    <header className="modal__header">
      <ArrowBack className="modal__arrow" onClick={() => setShowModal('')} />
      <span className="modal__title">{showModal}</span>
    </header>
    {showModal === 'Profile' && <Profile />}
    {showModal === 'New chat' && <NewChat setShowModal={setShowModal} />}
    {showModal === 'New group' && <NewGroup />}
    {showModal === 'Settings' && <Settings />}
  </div>
);

export default SidebarModal;
