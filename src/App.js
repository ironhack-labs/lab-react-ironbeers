import React from 'react';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

import { Route } from 'react-router-dom';

import './App.css';
import BeerDetails from './components/BeerDetails';

function App(props) {
  return (
    <div className="m-5">
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/beers" component={Beers}></Route>
      <Route path="/random-beer" component={RandomBeer}></Route>
      <Route path="/new-beer" component={NewBeer}></Route>
      <Route path="/beers/:beerId" component={BeerDetails}></Route>
    </div>
  );
}

export default App;
