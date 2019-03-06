import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage'
import { Link, Switch, Route } from 'react-router-dom'
import AllBeers from './components/AllBeers';
import Beer from './components/Beer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row justify-content-center">
          <div className="col-5">
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/beers' component={AllBeers} />
              <Route exact path='/beers/:id' component={Beer} />
              <Route path='/random-beer' component={RandomBeer} />
              <Route path='/new-beer' component={NewBeer} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
