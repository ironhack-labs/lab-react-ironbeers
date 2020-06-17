import React from 'react';
import './App.css';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetail from './components/BeerDetail';

import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={AllBeers} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
        <Route path="/beers/:id" component={BeerDetail} />
      </Switch>
    </div>
  );
}

export default App;
