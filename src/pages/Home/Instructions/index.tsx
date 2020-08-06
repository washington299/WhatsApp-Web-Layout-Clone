import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

import './styles.scss';

const Instructions: React.FC = () => (
  <div className="tutorial">
    <h2 className="tutorial__title">To use WhatsApp on your computer:</h2>
    <ul className="tutorial__list">
      <li className="tutorial__item">Open WhatsApp on your phone.</li>
      <li className="tutorial__item">
        Tap
        {' '}
        <b>Menu</b>
        {' '}
        <BsThreeDotsVertical className="tutorial__item--icon" />
        {' '}
        or
        {' '}
        <b>Settings</b>
        {' '}
        <FiSettings className="tutorial__item--icon" />
        {' '}
        and select
        {' '}
        <b>WhatsApp Web.</b>
      </li>
      <li className="tutorial__item">Point your phone to this screen to capture the code.</li>
    </ul>
    <a href="/" className="tutorial__help-link">Need help to get started?</a>
  </div>
);

export default Instructions;
