import React from 'react';
import Homepage from './components/Homepage';
import AllBeers from './components/AllBeers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import { Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/beers" component={AllBeers} />
      <Route exact path="/beers/:id" component={BeerDetails} />
      <Route path="/random-beer" component={RandomBeer} />
    </div>
  );
}

export default App;
