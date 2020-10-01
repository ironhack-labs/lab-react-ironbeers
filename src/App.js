import React from 'react'
import { Switch, Route } from 'react-router-dom'

import IndexBeers from './components/IndexBeers'

import BeersList from './components/BeersList'
import BeerDetails from './components/BeerDetails'
import Header from './components/Header'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'



import './App.css'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact render={() => <IndexBeers />} />
        <Route path="/beers" exact render={() => <BeersList />} />
        <Route path="/beers/:_id" exact render={props => <BeerDetails {...props} />} />
        <Route path="/random" exact render={() => <RandomBeer />} />
        <Route path="/new" exact render={() => <NewBeer />} />
      </Switch>
    </>
  )
}

export default App;
