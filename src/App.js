import React from 'react';
import './App.css';
import Home from './components/Home';
import ListBeers from './components/ListBeers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import BeerDetails from './components/BeerDetails';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={ListBeers} />
      <Route exact path="/beers/:id" component={BeerDetails} />
      <Route exact path="/new-beer" component={NewBeer} />
      <Route exact path="/random-beer" component={RandomBeer} />
    </div>
  );
}

export default App;
