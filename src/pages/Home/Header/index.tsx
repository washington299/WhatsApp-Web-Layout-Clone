import React from 'react';
import { RiWhatsappLine } from 'react-icons/ri';

import './styles.scss';

const Header: React.FC = () => (
  <div className="container">
    <header className="header">
      <div className="header__logo">
        <RiWhatsappLine className="header__icon" />
        <span className="header__title">Whatsapp Web</span>
      </div>
    </header>
  </div>
);

export default Header;
