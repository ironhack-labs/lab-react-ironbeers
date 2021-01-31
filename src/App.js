import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/all">
            all
          </Route>
          <Route path="/random">
            random
          </Route>
          <Route path="/new">
            new
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
