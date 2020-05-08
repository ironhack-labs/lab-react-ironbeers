import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Beer from './components/Beer'
import BeerDetail from './components/BeerDetail'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beer} />
          <Route exact path="/beers/:id" component={BeerDetail} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
