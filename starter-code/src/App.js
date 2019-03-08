import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import axios from 'axios';
import {Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import AllBeers from './components/AllBeers'

class App extends Component {
  render() {
    return (
      <div className="App">
      
        < Home />
      
          <Switch>
              <Route path='/all' component={AllBeers} />
          </Switch>
      
          
      </div>
    );
  }
}

export default App;
