import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Beers from './components/Beers/Beers';
import BeerDetail from './components/BeerDetail/BeerDetail';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/beers/:id" component={BeerDetail} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
