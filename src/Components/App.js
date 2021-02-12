import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './Home';
import BeersList from './BeersList';
import SingleBeer from './SingleBeer';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path="/beers" component={BeersList} />
      <Route exact path="/beers/:_id" component={SingleBeer} />
      <Route exact path="/random-beer" component={RandomBeer} />
      <Route exact path="/new-beer" component={NewBeer} />
    </BrowserRouter>
  );
}

export default App;
