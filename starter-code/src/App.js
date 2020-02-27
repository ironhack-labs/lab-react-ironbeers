import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import BeersList from './components/pages/beersList'
import RandomBeer from './components/pages/randomBeer'
import BeerDetails from './components/pages/beerDeatils'
import BeerForm from './components/pages/newBeer'
import HomePage from './components/pages/home'
import './App.css';

import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/beers" render={() => <BeersList />} />
        <Route path="/random-beer" render={() => <RandomBeer />} />
        <Route path="/details/:id" render={match => <BeerDetails {...match} />} />
        <Route path="/add-beer" render={() => <BeerForm />} />
      </Switch>
    </>
  )

}

export default App
