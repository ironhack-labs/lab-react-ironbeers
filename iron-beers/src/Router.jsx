import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import HomeContainer from './components/HomeContainer'
import allBeers from './components/allBeers'
import beerDetail from './components/beerDetail'

const Navbar = () => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
  </ul>
)

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/beers" component={allBeers} />
        <Route exact path="/beers/:id" component={beerDetail} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
