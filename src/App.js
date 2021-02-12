import React from 'react';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import beerDetails from './components/BeerDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/beers/:beer_id' component={beerDetails}/>
        <Route path="/" exact component={HomePage} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/randombeer" component={RandomBeer} />
        <Route exact path="/newbeer" component={NewBeer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
