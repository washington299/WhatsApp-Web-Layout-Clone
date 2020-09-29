import React from 'react';
import { ArrowBack } from '@material-ui/icons';

import './styles.scss';

type Props = {
  title: string;
  showModal: React.Dispatch<React.SetStateAction<string>>;
};

const SidebarModal = ({ title, showModal }: Props) => (
  <div className="modal">
    <header className="modal__header">
      <ArrowBack className="modal__arrow" onClick={() => showModal('')} />
      <span className="modal__title">{title}</span>
    </header>
  </div>
);

export default SidebarModal;
