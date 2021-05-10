import React from 'react';
import Homepage from './components/Homepage';
import AllBeers from './components/AllBeers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import { Route } from "react-router-dom";
import './App.css';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div>
      <Route exact path="/" component = { Homepage } />
      <Route exact path="/beers" component = { AllBeers } />
      <Route exact path="/beers/:id" component = { BeerDetails } />
      <Route exact path="/random-beer" component = { RandomBeer } />
      <Route path="/new-beer" component = { NewBeer } />
    </div>
  );
}

export default App;
