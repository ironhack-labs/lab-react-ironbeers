import React, { Component } from 'react'

import Home from './pages/home/home'
import AllBeers from "./pages/allBeers/allBeers"
import BeerDetails from "./pages/beerDetails/beerDetails"

import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/beers/:id" render={props => <BeerDetails {...props} /> }/>
        <Route path="/beers" component={AllBeers} />
        <Route path="/" component={Home} />
      </Switch>
    )
  }
}

export default App
