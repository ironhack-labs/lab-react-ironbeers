import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/views/HomePage/HomePage';
import AllBeers from './components/views/AllBeers/AllBeers';

function App() {
  return (
    <div className="container">
      

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/beers">
          <AllBeers />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
