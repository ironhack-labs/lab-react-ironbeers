import React from 'react'
// import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from 'react-router-dom'
// import './App.css';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import AllBeers from './pages/AllBeers'
import BeerDetail from './pages/BeerDetail'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'

export default function RouterApp(){
  return (
    <div>
      <Router>
          <NavBar />
          <div style={{marginTop: '55px'}}>
            <Switch>
              <Route 
                component={Home} 
                exact 
                path='/'
              />
              <Route 
                component={AllBeers} 
                exact 
                path='/beers'
              />
              <Route
                component={BeerDetail}
                exact
                path='/beers/:id'
              />
              <Route
                component={RandomBeer}
                exact
                path='/random'
              />
              <Route
                component={NewBeer}
                exact
                path='/new'
              />
            </Switch>
          </div>
      </Router>
    </div>

  )
}