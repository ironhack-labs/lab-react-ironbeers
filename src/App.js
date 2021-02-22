import React from 'react';
import './App.css';
import Beers from './components/beers';
import RandomBeers from './components/randomBeers';
import Home from './components/Home';
import NewBeer from './components/newBeer';
import OneBeer from './components/oneBeer';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/beers">
          <Beers />
        </Route>
        <Route path="/beers/:id">
          <OneBeer />
        </Route>
        <Route path="/random-beer">
          <RandomBeers />
        </Route>
        <Route path="/new-beer">
          <NewBeer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
