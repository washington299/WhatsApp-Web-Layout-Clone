import React from 'react';

import Header from './Header';
import MainContent from './MainContent';

import './styles.scss';

const Home: React.FC = () => (
  <div className="top-background">
    <section className="container">
      <Header />
      <MainContent />
    </section>
  </div>
);

export default Home;
