import React, { Component } from 'react';

import './App.css';

import Home from './components/Home';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Beers from './components/Beers'

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="section">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/beers" component={Beers}/>
              <Route exact path="/random-beer" component={RandomBeer}/>
              <Route exact path="/new-beer" component={NewBeer}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
