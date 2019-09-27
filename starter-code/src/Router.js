import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Beers from './components/beers/Beers'
import BeerCard from './components/beers/BeerCard'
const Router = () => (
  <BrowserRouter>
    <Switch> 
      <Route exact path="/" component={Home}/>
      <Route exact path="/beers" component={Beers}/>
      <Route exact path="/andom-beer" component={BeerCard}/>
    </Switch>
  </BrowserRouter>
)

export default Router
