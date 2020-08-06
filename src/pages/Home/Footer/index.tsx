import React from 'react';

import './styles.scss';

const Footer: React.FC = () => (
  <footer className="footer">
    <span className="footer__text">Made by -</span>
    <a
      href="https://portfolio.washingtoncampos9.now.sh/"
      target="_blank"
      rel="noopener noreferrer"
      className="footer__link"
    >
      Washington Campos
    </a>
  </footer>
);

export default Footer;
