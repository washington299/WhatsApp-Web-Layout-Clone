import React from 'react';

import Instructions from '../Instructions';
import ScanArea from '../ScanArea';

import './styles.scss';

const MainContent: React.FC = () => (
  <main>
    <Instructions />
    <ScanArea />
  </main>
);

export default MainContent;
