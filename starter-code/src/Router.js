import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Beers from './components/Beers'
import BeerDetail from './components/BeerDetail'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:id" component={BeerDetail} />
        <Route exact path="/random" component={RandomBeer} />
        <Route exact path="/new" component={NewBeer} />
      </Switch>
    </BrowserRouter>
  )
}
