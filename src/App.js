import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import BeersList from './components/BeersList';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
           <Header />
     <BrowserRouter>
      <Route exact path='/' component={HomePage} />
      <Route path='/beers' component={BeersList} />
      <Route exact path='/beers/:beerId' component={SingleBeer} />
      <Route exact path='/random-beer' component={RandomBeer} />
      <Route exact path='/new-beer' component={NewBeer} />
     </BrowserRouter>
    </div>
  );
}

export default App;


