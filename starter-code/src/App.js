import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/allbeers" component={AllBeers} />
          <Route path="/randombeer" component={RandomBeer} />
          <Route path="/newbeer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
