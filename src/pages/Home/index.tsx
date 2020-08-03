import React from 'react';

import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

import './styles.scss';

const Home: React.FC = () => (
  <div className="top-background">
    <Header />
    <MainContent />
    <Footer />
  </div>
);

export default Home;
