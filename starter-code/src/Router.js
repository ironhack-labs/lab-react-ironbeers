import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import Home from './components/pages/Home'
import BeerAll from './components/beers/BeerAll'
import BeerForm from './components/beers/BeerForm'
import BeerRandom from './components/beers/BeerRandom'
// import BeerOne from './components/beers/BeerOne'

function Router() {
  return (
    <BrowserRouter>
      {/* <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink> */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={BeerAll} />
        <Route exact path="/beers/random" component={BeerRandom} />
        <Route exact path="/beers/new" component={BeerForm} />
        {/* <Route exact path="/beers/:id" component={BeerOne} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Router
