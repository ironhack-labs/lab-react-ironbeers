import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NewBeer from './components/api/NewBeer'
import RandomBeers from './components/api/RandomBeers'
import AllBeers from './components/api/AllBeers'
import DetailBeer from './components/api/DetailBeer'
import Home from './components/home/Home'
import './Router.css'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/random-beer" component={RandomBeers} />
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/beers/:beerId" component={DetailBeer} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;