import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage'
import ListBeers from './components/ListBeers'
import RandomBeer from './components/RandomBeer'
import SingleBeer from './components/SingleBeer';
import NewBeer from './components/NewBeer';




function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route  path='/beers'>
          <ListBeers />
        </Route>
        <Route  path='/random-beer'>
          <RandomBeer />
        </Route>
        <Route  path='/beers/:beerId'>
          <SingleBeer />
        </Route>
        <Route  path='/new-beer'>
          <NewBeer />
        </Route>
        
      </Switch>



    </div>
  );
}

export default App;
