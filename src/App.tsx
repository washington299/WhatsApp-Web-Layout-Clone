import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ChatScreenProvider } from './contexts/chat-screen';
import { ContactsDataProvider } from './contexts/contacts';

import Home from './pages/Home';
import Chat from './pages/Chat';

import './App.scss';

function App() {
  return (
    <ChatScreenProvider>
      <ContactsDataProvider>
        <Router>
          <Switch>
            <Route path="/chat" component={Chat} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </ContactsDataProvider>
    </ChatScreenProvider>
  );
}

export default App;
