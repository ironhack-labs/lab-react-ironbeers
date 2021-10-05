import React from 'react';

import './App.css';
import { Route } from 'react-router-dom';
import AllBeers from './pages/AllBeers';
import Home from './pages/Home';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/beers" component={AllBeers}></Route>;
      <Route exact path="/beers/:id" component={SingleBeer}></Route>
    </div>
  );
}

export default App;
