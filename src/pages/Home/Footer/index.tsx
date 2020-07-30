import React from 'react';

import './styles.scss';

const Footer: React.FC = () => (
  <footer>
    <span>Made by -</span>
    <a
      href="https://portfolio.washingtoncampos9.now.sh/"
      target="_blank"
      rel="noopener noreferrer"
      className="made-by"
    >
      Washington Campos
    </a>
  </footer>
);

export default Footer;
