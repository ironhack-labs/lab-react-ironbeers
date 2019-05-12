import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeComponent from './components/home/HomeComponent'
import Beers from './components/allBeers/Beers'
import RandomBeer from './components/randomBeer/RandomBeer'
import NewBeer from './components/newBeer/NewBeer'
import CardDetails from './components/allBeers/CardDetails'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={HomeComponent} />
      <Route exact path={'/beers'} component={Beers} />
      <Route exact path={'/randombeer'} component={RandomBeer} />
      <Route exact path={'/newbeer'} component={NewBeer} />
      <Route exact path={'/beers/:id'} component={CardDetails} />
    </Switch>
  )
}

export default Routes
