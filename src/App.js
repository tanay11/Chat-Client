import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Join} from './components/Join/Join';
import {Chat} from './components/Chat/Chat';

const App = () => {
  return(
    <Router>
    <Switch>
      <Route path="/" component={Join} exact/>
      <Route path="/chat" component={Chat} />
    </Switch>
  </Router>
  )
}

export default App;
