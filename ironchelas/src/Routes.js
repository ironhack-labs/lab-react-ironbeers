import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeContainer from './components/home/HomeContainer'
import AllBeers from './components/beers/AllBeers'
import RandomBeer from './components/beers/RandomBeer'
import OneBeer from './components/beers/OneBeer'
import NewBeer from './components/home/NewBeer'

const Routes = () => (
  <Switch>
    <Route exact path={'/'} component={HomeContainer} />
    <Route exact path={'/beers'} component={AllBeers} />
    <Route exact path={'/beers/random'} component={RandomBeer} />
    <Route exact path={'/:id'} component={OneBeer} />
    <Route exact path={'/beers/new'} component={NewBeer} />
    <Route component={() => <p>404</p>} />
  </Switch>
)

export default Routes