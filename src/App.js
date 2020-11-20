import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import Beers from './components/beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/singlebeer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/newbeer" component={NewBeer}></Route>
          <Route exact path="/randombeer" component={RandomBeer}></Route>
          <Route exact path="/beers" component={Beers}></Route>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/beers/:id}" component={SingleBeer}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
