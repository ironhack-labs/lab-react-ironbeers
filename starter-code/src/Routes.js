import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BeersContainer from './components/beers/BeersContainer'
import BeersDetail from './components/beers/BeersDetail'
import Nav from './components/styled-components/Nav'

const Routes = () => (
  <BrowserRouter>
    <div className="container">
    <Nav/>
    <Switch>
    <Route exact path="/" component={BeersContainer} />
    <Route exact path="/beers/:id" component={BeersDetail} />
    </Switch>
    </div>
  </BrowserRouter>
)

export default Routes
