import React from 'react';
import { ArrowBack } from '@material-ui/icons';

import Profile from './Profile';
import NewChat from './NewChat';
import NewGroup from './NewGroup';
import Settings from './Settings';

import './styles.scss';

type Props = {
  screen: string;
  title: string;
  showModal: React.Dispatch<React.SetStateAction<string>>;
};

const SidebarModal = ({ screen, title, showModal }: Props) => (
  <div className="modal">
    <header className="modal__header">
      <ArrowBack className="modal__arrow" onClick={() => showModal('')} />
      <span className="modal__title">{title}</span>
    </header>
    {screen === 'profile' && <Profile />}
    {screen === 'newChat' && <NewChat />}
    {screen === 'newGroup' && <NewGroup />}
    {screen === 'settings' && <Settings />}
  </div>
);

export default SidebarModal;
