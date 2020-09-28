import React from 'react';
import { Link } from 'react-router-dom';
import { WhatsApp } from '@material-ui/icons';

import './styles.scss';

const Header: React.FC = () => (
  <div className="container">
    <header className="header">
      <div className="header__logo">
        <WhatsApp className="header__icon" />
        <span className="header__title">Whatsapp Web</span>
      </div>
      <Link to="/chat">Chat</Link>
    </header>
  </div>
);

export default Header;
