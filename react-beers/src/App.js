import React, { Component } from 'react';
import './App.css';
import home from './components/home'
import beers from './components/beers'
import randomBeer from './components/random-beer'
import newBeer from './components/new-beer'
import beerDetails from './components/beer-details'


import { Switch, Route } from 'react-router-dom'

class App extends Component {

  constructor() {
    super()
  }

  render() {

    return (
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/beers" exact component={beers} />
        <Route path="/random-beer" exact component={randomBeer} />
        <Route path="/new-beer" exact component={newBeer} />
        <Route path="/beer-details/:beer_id" exact component={beerDetails} />
      </Switch>
    )
  }
}

export default App;