import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Beers from './components/Beers';
import Beer from './components/Beer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

const App = () => {
  let test = 2;

  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} test={test} />
        <Route exact path="/beers/:id" component={Beer} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
};

export default App;
