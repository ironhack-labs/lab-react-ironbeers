import './App.css';
import Home from './components/Home'
import showBeers from './components/showbeers'
import randombeer from './components/randombeer'
import Menu from './components/Menu'
import beerDetails from './components/beerdetails'
import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/showbeers' component={showBeers}/>
          <Route exact path='/beerDetails/:id' component={beerDetails}/>
          <Route exact path='/randombeer/' component={randombeer}/>
        </Switch>
      </div>
    )
  }
}