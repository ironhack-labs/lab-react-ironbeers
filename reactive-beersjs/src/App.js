import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import AllBeers from './components/AllBeers/AllBeers';
import RandomBeer from './components/RandomBeer/RandomBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={AllBeers}/>
          <Route exact path='/random-beer' component={RandomBeer}/>
          <Route exact path='/new-beer' component={RandomBeer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
