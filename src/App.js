import React from 'react';
import Home from './components/Home/Home';

import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Switch>
      <Route
                exact
                path="/beers"
                render={() => }
              />
              <Route
                exact
                path="/random-beer"
                render={() => }
              />
              <Route
                exact
                path="/new-beer"
                render={() => }
              />
      </Switch>
    </div>
  );
}

export default App;
