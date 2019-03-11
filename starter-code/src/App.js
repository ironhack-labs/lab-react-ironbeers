import React, { Component } from 'react';
import './App.css';
//import axios from 'axios';
import {Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import AllBeers from './components/AllBeers'
import RandomBeer from './components/RandomBeer'

class App extends Component {
  render() {
    return (
      <div className="App">
      
        < Home />
      
          <Switch>
              <Route exact path='/all' component={AllBeers} />
              <Route exact path='/random' component={RandomBeer} />
          </Switch>
      
          
      </div>
    );
  }
}

export default App;
