//react, mongoose, express, router-dom...

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Switch, Route } from 'react-router-dom'


import Home from './components/Home'
import NavBar from './components/NavBar'
import BeerList from './components/BeerList';


class App extends Component {
  constructor() {
    super()
    this.state = {}
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">



          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beers' component={BeerList} />

          </Switch>

        </header>
      </div>
    );
  }
}

export default App;
