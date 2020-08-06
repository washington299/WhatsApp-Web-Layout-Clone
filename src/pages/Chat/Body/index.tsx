import React from 'react';

import './styles.scss';

const Body: React.FC = () => (
  <section className="body">
    <header className="body__header">Body header</header>
    <section className="body__messages">Body messages</section>
    <div className="body__text-area">Body text area</div>
  </section>
);

export default Body;
