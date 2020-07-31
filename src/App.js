import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage'
import ListBeers from './components/ListBeers'
import RandomBeer from './components/RandomBeer'



function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/beers'>
          <ListBeers />
        </Route>
        <Route exact path='/random-beer'>
          <RandomBeer />
        </Route>
      </Switch>



    </div>
  );
}

export default App;
