import React from 'react';
import { WhatsApp } from '@material-ui/icons';

import './styles.scss';

const Header: React.FC = () => (
  <div className="container">
    <header className="header">
      <div className="header__logo">
        <WhatsApp className="header__icon" />
        <span className="header__title">Whatsapp Web</span>
      </div>
    </header>
  </div>
);

export default Header;
