import React from 'react';
import { MdColorize, MdVolumeOff, MdExpandMore } from 'react-icons/md';

import './styles.scss';

const Contact: React.FC = () => (
  <div className="contacts__container">
    <img src="assets/images/avatar/avatar-man-2.png" alt="Carlos Santana" className="contacts__img" />
    <div className="contacts__texts">
      <h3 className="texts__name">Washington Campos</h3>
      <span className="texts__lastMessage">Ultima mensagem recebida</span>
    </div>
    <div className="contacts__details">
      <span className="details__time">7:30 pm</span>
      <MdColorize className="details__icon" />
      <MdVolumeOff className="details__icon" />
      <MdExpandMore className="details__icon" />
      <div className="details__unreadMessage">100</div>
    </div>
  </div>
);

export default Contact;
