import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import HomePage from './components/HomePage'

import AllBeer from './components/Beer-all'
import RandomBeer from './components/Beer-random'
import NewBeer from './components/Beer-new'


function App() {
  return (
    <div>
      <HomePage />
      <Switch>
        <Route path="/beers" exact component={AllBeer} />
        <Route path="/random-beer" exact component={RandomBeer} />
        <Route path="/new-beer" exact component={NewBeer} />
      </Switch>
  
    </div>
  );
}

export default App;


