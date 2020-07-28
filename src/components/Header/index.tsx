import React from 'react';
import { RiWhatsappLine } from 'react-icons/ri';

import './styles.scss';

const Header: React.FC = () => (
  <header>
    <div className="logo">
      <RiWhatsappLine />
      <span>Whatsapp Web</span>
    </div>
  </header>
);

export default Header;
