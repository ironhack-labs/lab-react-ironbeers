import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home.js'
import NewBeer from './NewBeer/NewBeer.js';
import RandomBeer from './RandomBeer/RandomBeer.js'
import AllBeers from './AllBeers/AllBeers.js'
import { Switch, Route, Link } from "react-router-dom";
import BeerId from './BeerId/BeerId';
// import Nav from '../Navbar/Nav.js'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/allBeers' component={AllBeers}/>
          <Route exact path='/randomBeer' component={RandomBeer}/>
          <Route exact path='/newBeer' component={NewBeer}/>
          <Route exact path='/allBeers/:id' component={BeerId}/>
        </Switch>
      </div>
    );
  }
}

export default App;
