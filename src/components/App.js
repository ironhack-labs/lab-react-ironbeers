import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './navbar/NavBar';
import HomePage from './home/HomePage';
import BeerList from './beerlist/BeerList';
import BeerItem from './beeritem/BeerItem';
import RandomBeer from './random-beer/RandomBeer';
import NewBeer from './newbeer/NewBeer';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/beers" component={BeerList} />
          <Route exact path="/beers/:id" component={BeerItem} />
          <Route path="/randombeer" component={RandomBeer} />
          <Route path="/newbeer" component={NewBeer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
