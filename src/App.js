import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './HomePage';
import BeersList from './BeersList'
import BeerDetails from './BeerDetails'
import RandomBeer from './RandomBeer'

function App() {
  return (
    <div className="container mt-2" >
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/allbeers" component={BeersList} />
        <Route exact path="/beers/:id" component={BeerDetails} />
        <Route exact path="/beers/random" component={RandomBeer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
