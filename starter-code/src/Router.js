import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Beers from './pages/Beers'
import BeerDetail from './pages/BeerDetail'
import BeerRandom from './pages/BeerRandom'
import CreateBeer from './pages/AddBeer'
const Router = () => {
 return (
  <BrowserRouter>
  <Navbar />
   <Switch>
   <Route exact path="/" component={ Home } />
   <Route exact path="/beers" component={ Beers } />
   <Route exact path="/beers/:id" component={ BeerDetail } />
   <Route exact path="/randomBeer" component={ BeerRandom } />
   <Route exact path="/newBeer" component={ CreateBeer } />
   </Switch>
  </BrowserRouter>
 )
}

export default Router