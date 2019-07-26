import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeContainer from './components/HomeContainer'
import BeerContainer from './components/BeerContainer'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/beers" component={BeerContainer} />
      </Switch>
    </BrowserRouter>
  )
}
