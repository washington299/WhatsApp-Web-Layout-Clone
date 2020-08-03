import React from 'react';

import Tutorial from '../Tutorial';
import VideoArea from '../VideoArea';

import './styles.scss';

const MainContent: React.FC = () => (
  <div className="container">
    <main>
      <Tutorial />
      <VideoArea />
    </main>
  </div>
);

export default MainContent;
