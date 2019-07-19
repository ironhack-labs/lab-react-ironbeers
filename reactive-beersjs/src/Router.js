import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeContainer, BeersContainer, RandomBeerContainer, NewBeerContainer } from './components'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route exact path='/beers' component={BeersContainer} />
      <Route exact path='/random-beer' component={RandomBeerContainer} />
      <Route exact path='/new-beer' component={NewBeerContainer} />
    </Switch>
  </BrowserRouter>
)



export default Router

