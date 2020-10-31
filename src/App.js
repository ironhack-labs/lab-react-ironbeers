import React, { Component } from 'react'
import {Switch , Route, withRouter} from 'react-router-dom'

import Home from './components/Home'
import AllBeers from './components/AllBeers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import Header from './components/Header'
import BeerDetail from './components/BeerDetail'

class App extends Component {


  render() {
    
    return (
      <div>   
        <h2>myApp hardCoded</h2>
        
        <Switch>
          <Route exact path='/' render={() => {
            return <Home />
          }} />
          <Route path='/beers' render={() => {
            return (<div><Header /><AllBeers /></div>)
          }} />
          <Route path='/BeerDetail' render={(beers) => {
            return (<div><Header /><BeerDetail /></div>)
          }} />
          <Route path='/NewBeer' render={() => {
            return (<div><Header /><NewBeer /></div>)
          }} />
        </Switch>
        
      </div>
    )
  }
}

export default withRouter(App)
