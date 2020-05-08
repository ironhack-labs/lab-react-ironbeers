import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Beer from './pages/Beer'
import BeerId from './pages/BeerId'
import RandomBeer from './pages/RandomBeer'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beer} />
        <Route exact path="/beers/:id" component={BeerId} />
        <Route exact path="/random-beer" component={RandomBeer} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
