import React from 'react';

import Instructions from '../Instructions';
import ScanArea from '../ScanArea';

import './styles.scss';

const Tutorial: React.FC = () => (
  <section className="tutorial">
    <Instructions />
    <ScanArea />
  </section>
);

export default Tutorial;
