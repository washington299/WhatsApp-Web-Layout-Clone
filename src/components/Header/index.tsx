import React, { useState, useEffect } from 'react';
import { RiWhatsappLine } from 'react-icons/ri';

import './styles.scss';

const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="top-background">
      <section className="container">
        <header>
          <div className="logo">
            <RiWhatsappLine />
            <span>Whatsapp Web</span>
          </div>
        </header>
        {windowWidth > 640 && (
          <div className="header-complement" />
        )}
      </section>
    </div>
  );
};

export default Header;
