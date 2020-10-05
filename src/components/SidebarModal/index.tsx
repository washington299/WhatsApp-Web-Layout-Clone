import React from 'react';
import { ArrowBack } from '@material-ui/icons';

import Profile from './Profile';
import NewChat from './NewChat';
import NewGroup from './NewGroup';
import Settings from './Settings';

import './styles.scss';

type Props = {
  title: string;
  showModal: string;
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
};

const SidebarModal = ({ title, showModal, setShowModal }: Props) => (
  <div className="modal" style={{ left: showModal !== '' ? 0 : -500 }}>
    <header className="modal__header">
      <ArrowBack className="modal__arrow" onClick={() => setShowModal('')} />
      <span className="modal__title">{title}</span>
    </header>
    {showModal === 'profile' && <Profile />}
    {showModal === 'newChat' && <NewChat />}
    {showModal === 'newGroup' && <NewGroup />}
    {showModal === 'settings' && <Settings />}
  </div>
);

export default SidebarModal;
