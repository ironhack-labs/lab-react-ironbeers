import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Beers from './views/Beers/Beers';
import BeerView from './views/Beer/Beer';
import RandomBeer from './views/RandomBeer/RandomBeer';
import NewBeer from './views/NewBeer/NewBeer';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/random-beer">
        <RandomBeer />
      </Route>
      <Route exact path="/new-beer">
        <NewBeer />
      </Route>
      <Route exact path="/beers">
        <Beers />
      </Route>
      <Route exact path="/beers/:beerId">
        <BeerView />
      </Route>
      <Route exact path="/beers/:beerId">
        <BeerView />
      </Route>
    </BrowserRouter>
  );
}

export default App;
