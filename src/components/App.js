import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'


import Home from './pages/Home';
import AllBeers from './pages/AllBeers';
import BeerDetails from "./pages/BeerDetails"
import RandomBeer from "./pages/RandomBeer"

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/beers" exact render={() => <AllBeers />} />
        <Route path="/beers/:id" exact render={props => <BeerDetails {...props} />} />
        <Route path="/random-beer" exact render={() => <RandomBeer />} />
      </Switch>
    </>
  );
}

export default App;
