import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ListBeers from './components/ListBeers';
import SingleBeer from './components/SingleBeer';
import NewBeer from './components/NewBeer';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/beers' component={ ListBeers } />
          <Route exact path='/random-beer' component={ SingleBeer } />
          <Route exact path='/new-beer' component={ NewBeer } />
        </Switch>
      </div>
    );
  }
}

export default App;
