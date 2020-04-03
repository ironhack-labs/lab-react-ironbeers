import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Beers from './pages/Beers';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './pages/RandomBeer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/beers' component = {Beers}/>
          <Route path = '/beer/:id' component = {BeerDetail}/>
          <Route path = '/random-beer' component = {RandomBeer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
