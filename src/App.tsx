import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Chat from './pages/Chat';

import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/chat" component={Chat} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
