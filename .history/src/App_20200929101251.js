import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Switch } from 'react-router-dom';
import Beers from './components/Beers.js';
import Beer from './components/Beer.js';
import RandomBeer from './components/RandomBeer.js';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/beers" component={Beers}></Route>
        <Route exact path="/beers/:id" component={Beer}></Route>
        <Route exact path="/new-beer" component={NewBeer}></Route>
      </Switch>
    </div>
  );
}

export default App;
