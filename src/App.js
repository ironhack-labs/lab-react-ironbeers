import React from 'react';
import './App.css';
import BeersList from './components/Beers'
import BeerDetail from './components/Beer-detail'
import Random from './components/Random'

import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
   
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/beers" exact component={BeersList} />
    <Route path="/beers/:id" component={BeerDetail} />
    <Route path="/random" component={Random} />
    </Switch>
  );
}

export default App;
