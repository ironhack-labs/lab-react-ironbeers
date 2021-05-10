import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import AllBeers from './components/AllBeers';
import Home from './components/Home';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/all-beers" component={AllBeers} />
      <Route exact path="/random-beer" component={RandomBeer} />
      <Route exact path="/new-beer" component={NewBeer} />
      <Route exact path="/beers/:beerId" component={BeerDetails} />
    </>
  );
}

export default App;
