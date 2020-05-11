import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import ListBeers from './components/ListBeers';
import RandomBeer from './components/RandomBeer';
import OneBeer from './components/OneBeer';
import NewBeer from './components/NewBeer';
import Home from './components/Home';
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={ListBeers} />
          <Route path='/random-beer' component={RandomBeer} />
          <Route path='/beers/:_id' component={OneBeer} />
          <Route path='/new-beer' component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

  export default App;