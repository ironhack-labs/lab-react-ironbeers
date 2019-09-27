import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Random from './pages/Random'
import Add from './pages/Add'
import SingleBeer from './pages/SingleBeer'
import Search from './pages/Search'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/random' component={Random} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/add' component={Add} />
        <Route exact path='/:id' component={SingleBeer} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
