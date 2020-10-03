import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ListBeers from './ListBeers';
import NewBeer from './NewBeer';
import RandomBeer from './RandomBeer';
import SingleBeer from './SingleBeer';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers/:id" component={SingleBeer} />
        <Route exact path="/beers" component={ListBeers} />
        <Route exact path="/randombeer" component={RandomBeer} />
        <Route exact path="/newbeer" component={NewBeer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
