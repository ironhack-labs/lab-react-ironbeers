import React from 'react';
import Home from './components/Home';
import './App.css';
import { Route } from 'react-router-dom';
import AllBeers from './components/AllBeers';
import Header from './components/Header';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={AllBeers} />
      <Route exact path="/beers/:id" component={BeerDetails} />
      <Route exact path="/beers/random-beer" component={RandomBeer} />
      <Route exact path="/new-beer" component={NewBeer} />
    </div>
  );
}

export default App;
