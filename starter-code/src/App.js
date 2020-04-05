import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import home from './components/home';
import Header from './components/header'
import allBeers from './components/allBeers'
import beerDetails from './components/beerDetails';
import randomBeer from './components/randomBeer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path='/' component={home} />
            <Route exact path='/allBeers' component={allBeers} />
            <Route exact path='/allBeers/:id' component={beerDetails} />
            <Route exact path='/randomBeer' component={randomBeer} />
          </Switch>
      </div>
    );
  }
}

export default App;
