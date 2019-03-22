import React, { Component } from 'react';
import './App.css';

import Home from './components/Home'

import {Switch, Route} from "react-router-dom"
import ListBeers from './components/ListBeers';
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer'

class App extends Component {
  render() {
    return (
      <div className="App">

      <Switch>
      
      <Route exact path='/' component={Home}/>
      <Route exact path='/beers' component={ListBeers}/>
      <Route exact path='/beer/:id' component={BeerDetails}/>
      <Route exact path='/random-beer' component={RandomBeer}/>
      <Route exact path='/new-beer' component={Home}/>

      </Switch>
      </div>
    )
  }
}

export default App
