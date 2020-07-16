import React from 'react';

import './App.css';


import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import RandomBeer from './components/RandomBeers'
import BeersList from './components/Beers'

function App() {
  return (

  <main>

      <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/beers" render={() => <BeersList />} />
      <Route exact path="/random-beer" render={() => <RandomBeer />} />
      </Switch>

  </main>
  
  );
}

export default App;
