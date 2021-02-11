import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';
import HomePage from './HomePage';
import BeersList from './BeersList';
import BeerPage from './BeerPage';
import RandomBeer from './RandomBeer';
import NewBeer from './form/NewBeer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={BeersList} />
        <Route exact path="/beers/random-beer" component={RandomBeer} />
        <Route exact path="/beers/new-beer" component={NewBeer} />
        <Route exact path="/beers/:id" component={BeerPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
