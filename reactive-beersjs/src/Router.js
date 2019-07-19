import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeContainer, BeersContainer, RandomBeerContainer, NewBeerContainer, BeerDetail } from './components'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route exact path='/beers' component={BeersContainer} />
      <Route exact path='/random-beer' component={RandomBeerContainer} />
      <Route exact path='/new-beer' component={NewBeerContainer} />
      <Route exact path='/beer/:id' component={BeerDetail} />
    </Switch>
  </BrowserRouter>
)



export default Router

