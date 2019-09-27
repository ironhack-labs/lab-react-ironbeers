import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home/Home'
import AllBeers from './beers/AllBeers'
import OneBeer from './beers/OneBeer'
import RandomBeer from './beers/RandomBeer'
import BeerForm from './beers/BeerForm'


const Router =  () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/beers' component={AllBeers}/>
      <Route exact path='/beer/random' component={RandomBeer}/>
      <Route exact path='/beers/:id' component={OneBeer}/>
      <Route exact path='/new-beer' component={BeerForm}/>
    </Switch>
  </BrowserRouter>
)

export default Router