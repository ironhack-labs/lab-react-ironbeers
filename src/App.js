import React from 'react';
import './App.css';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import BeerDetails from './components/BeerDetails';
import NewBeer from './components/NewBeer';
import Random from './components/Random';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={AllBeers} />
      <Route exact path="/beers/:id" component={BeerDetails} />
      <Route exact path="/new-beer" component={NewBeer} />
      <Route exact path="/random-beer" component={Random} />
    </div>
  );
}

export default App;
