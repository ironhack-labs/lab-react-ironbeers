import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import AllBeers from './pages/AllBeers'
import Beer from './pages/Beer'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'

//Dummy components
// const Home = () => <h1 className="title">Home</h1>

function RouterApp() {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path='/'/>
        <Route component={AllBeers} exact path='/beers'/>
        <Route component={NewBeer} exact path='/beers/new'/>
        <Route component={RandomBeer} exact path='/beers/random'/>
        <Route component={Beer} exact path='/beers/:id'/>
      </Switch>
    </Router>
  )
}

export default RouterApp