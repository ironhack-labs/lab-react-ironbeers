import React, { Component } from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Beers from './components/Beers'
import BeerDetail from './components/BeerDetail'
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          
        <Route exact path="/" component={Home} />
        <Route path="/beers/:beerdid" component={BeerDetail} />
        <Route  path="/beers" component={Beers} />
        <Route  path="/random-beer" component={RandomBeer} />
        <Route  path="/new-beer" component={NewBeer} />

        <Route  render={() => <h1>404</h1> } />
        </Switch>
      </div>
    );
  }
}

export default App;
