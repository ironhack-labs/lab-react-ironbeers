import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import './App.css'

import NavBar from './components/ui/NavBar'
import { Switch, Route } from 'react-router-dom'

import Beers from './components/pages/beers'
import Index from './components/pages/index'
import BeerDetails from './components/pages/beerDetails'
import NewBeer from './components/pages/newBeer'

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Index />} />
          <Route path="/beers" render={() => <Beers />} />
          <Route path="/new-beer" render={() => <NewBeer />} />
          <Route path="/random-beer" render={match => <BeerDetails {...match} />} />
          <Route path="/:id" render={match => <BeerDetails {...match} />} />
        </Switch>
      </>
    )
  }
}

export default App
