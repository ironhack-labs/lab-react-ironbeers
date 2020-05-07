import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ServiceBeer from './../serviceBeer'

import HomeNav from './ui/homeNav/HomeNav'
import Home from './pages/home/Home'
import BeersList from './pages/beersList/BeersList'
import BeerDetails from './pages/beerDetails/BeerDetails'
import RandomBeer from './pages/randomBeer/RandomBeer'

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
    this.service = new ServiceBeer()
  }

  render() {
    return (
      <>
        <HomeNav></HomeNav>
        <main>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/beers" render={() => <BeersList getAllBeers={this.service.getAllBeers} />} />
            <Route path="/:id/details" exact render={props => <BeerDetails {...props} getBeer={id => this.service.getOneBeers(id)} />} />
            <Route path="/randomBeer" exact render={() => <RandomBeer getRandomBeer={this.service.getRandomBeers} />} />
          </Switch>
        </main>
      </>
    )
  }
}

export default App
