import React from 'react';
import './App.css';
import Home from './Components/Home';
import AllBeers from './Components/AllBeers'
import { Route } from 'react-router-dom';
import BeerDetails from './Components/BeerDetails';
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={AllBeers} />
      <Route exact path="/beers/:beerId" component={BeerDetails} />
      <Route exact path="/random-beer" component={RandomBeer} />
      <Route exact path="/new-beer" component={NewBeer} />
    </div>
  );
}

export default App;
