import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import HomePage from './Home-beer'
import NewBeer from './New-beer'
import RandomBeer from './Random-beer'
import AllBeers from './beers/Beer-list/index'


function App() {
  return (
    <>
      <h1>hola</h1>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/NewBeer" render={() => <NewBeer />} />
        <Route path="/RandomBeer" render={() => <RandomBeer />} />
        <Route path="/AllBeers" render={() => <AllBeers />} />
      </Switch>
    </>
  )
}

export default App;
