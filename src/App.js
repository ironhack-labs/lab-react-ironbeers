import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Beers from './views/Beers/Beers';
import BeerView from './views/Beer/Beer';
import RandomBeer from './views/RandomBeer/RandomBeer';

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
        <Home />
      </Route>
      <Route exact path="/beers">
        <Beers />
      </Route>
      <Route exact path="/beers/:beerId">
        <BeerView />
      </Route>
    </BrowserRouter>
  );
}

export default App;
