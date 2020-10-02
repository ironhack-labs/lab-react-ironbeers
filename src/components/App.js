import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import Home from './Home/Home'
import AllBeers from './AllBeers/AllBeers'
import BeerDetails from './BeerDetails/BeerDetails'
import BeerRamdom from './RandomBeer/RandomBeer'
import BeerForm from './BeerForm/BeerForm'

function App() {
  return (
    <main>
      <Navigation />
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route path='/beers/:_id' render={props => <BeerDetails {...props} />} />
        <Route path='/beers' render={() => <AllBeers />} />
        <Route path='/random-beer' render={() => <BeerRamdom />} />
        <Route path='/new-beer' render={() => <BeerForm />} />
      </Switch>
    </main>
  )
}

export default App