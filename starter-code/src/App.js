import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Switch, Link, Route } from 'react-router-dom';
import beers from './components/Beers/beers';
import randombeer from './components/randomBeer/randombeer';
import newbeer from './components/New-beer/newbeer';
import Home from './components/Home/home';
import Navbar from './components/Navbar/navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beers" exact component={beers} />
          <Route path="/newbeer" component={newbeer} />
          <Route path="/randombeer" component={randombeer} />
        </Switch>

        
      </div>
    );
  }
}

export default App;
