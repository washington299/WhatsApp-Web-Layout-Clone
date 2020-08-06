import React from 'react';

import TutorialGuide from '../TutorialGuide';
import VideoGuide from '../VideoGuide';

import './styles.scss';

const MainContent: React.FC = () => (
  <div className="container">
    <main className="content">
      <TutorialGuide />
      <VideoGuide />
    </main>
  </div>
);

export default MainContent;
