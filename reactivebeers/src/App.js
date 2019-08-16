import React from 'react'
import './App.css'
import { Switch, Route} from 'react-router-dom'

import Home from './components/about-page'
import AllBeers from './components/all-beers'
import BeerDetails from './components/beer-details'
import RandomBeer from './components/random-beer'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component = {Home} />
        <Route exact path='/allBeers' component = {AllBeers} />
        <Route exact path='/:id' component = {BeerDetails} />
        <Route exact path = '/random' component = {RandomBeer}/>
      </Switch>
    </div>
  );
}

export default App;
