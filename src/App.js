import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './components/HomePage/HomePage';
import Beers from './components/Beers/Beers';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';
import SingleBeer from './components/SingleBeer/SingleBeer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:beerId" component={SingleBeer} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
