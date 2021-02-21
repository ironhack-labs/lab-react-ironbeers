import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/views/HomePage/HomePage';
import AllBeers from './components/views/AllBeers/AllBeers';
import SingleBeer from './components/views/SingleBeer/SingleBeer';

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
        <Route exact path="/beers/:id">
          <SingleBeer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
