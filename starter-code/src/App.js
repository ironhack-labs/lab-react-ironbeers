import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import {Switch, Route} from 'react-router-dom';
import AllBeers from './components/AllBeers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/allbeers' component={AllBeers} />
          <Route exact path='/randombeer' component={RandomBeer} />
          <Route exact path='/newbeer' component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
