import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

import './styles.scss';

const Instructions: React.FC = () => (
  <div>
    <h2>To use WhatsApp on your computer:</h2>
    <ul>
      <li>Open WhatsApp on your phone.</li>
      <li>
        Tap
        {' '}
        <b>Menu</b>
        {' '}
        <BsThreeDotsVertical />
        {' '}
        or
        {' '}
        <b>Settings</b>
        {' '}
        <FiSettings />
        {' '}
        and select
        {' '}
        <b>WhatsApp Web.</b>
      </li>
      <li>Point your phone to this screen to capture the code.</li>
    </ul>
    <a href="/">Need help to get started?</a>
  </div>
);

export default Instructions;
