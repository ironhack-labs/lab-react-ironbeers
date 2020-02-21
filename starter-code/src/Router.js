import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Beers from './pages/Beers'
import BeerDetail from './pages/BeerDetail'
import NewBeer from './pages/NewBeer'

function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={Beers} />
      <Route exact path="/beers/:id" component={BeerDetail} />
      <Route exact path="/random-beer" component={BeerDetail} />
      <Route exact path="/new-beer" component={NewBeer} />
    </BrowserRouter>
  )
}

export default Router

