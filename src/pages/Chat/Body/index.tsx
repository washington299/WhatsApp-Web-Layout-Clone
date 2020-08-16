import React from 'react';

import { useChatScreenState } from '../../../contexts/chat-screen';

import './styles.scss';

const Body: React.FC = () => {
  const { display } = useChatScreenState();

  return (
    <section className="body">
      {display && (
        <>
          <header className="body__header">Body header</header>
          <section className="body__messages">Body messages</section>
          <div className="body__text-area">Body text area</div>
        </>
      )}
      <h1>Welcome</h1>
    </section>
  );
};

export default Body;
