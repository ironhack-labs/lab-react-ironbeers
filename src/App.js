import React from 'react';

import './App.css';
import { Route } from 'react-router-dom';
import AllBeers from './pages/AllBeers';
import Home from './pages/Home';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import AddNewBeer from './pages/AddNewBeer';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/beers" component={AllBeers}></Route>;
      <Route exact path="/beers/:id" component={SingleBeer}></Route>
      <Route exact path="/random-beer" component={RandomBeer}></Route>
      <Route exact path="/new-beer" component={AddNewBeer}></Route>
    </div>
  );
}

export default App;
