import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomeContainer from './components/home/HomeContainer'
import AllBeers from './components/beers/AllBeers'
import RandomBeer from './components/beers/RandomBeer'
import NewBeer from './components/beers/NewBeer'

const Routes = ()=>(
  <Switch>
    <Route exact path={'/'} component={HomeContainer} />
    <Route exact path={'/all-beers'} component={AllBeers} />
    <Route exact path={'/random-beer'} component={RandomBeer} />
    <Route exact path={'/new-beer'} component={NewBeer}/>
    <Route component={() => <p>404</p>} />
  </Switch>
)
export default Routes