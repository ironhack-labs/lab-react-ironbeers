import React, { Component, Fragment } from 'react';
import './App.css';
import HomePage from './components/HomePage'
import AllBeers from './components/AllBeers'
import SingleBeer from './components/SingleBeer'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <Fragment>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/beers' component={AllBeers} />
        <Route exact path='/:id' component={SingleBeer} />
        <Route exact path='/beers/random' component={RandomBeer} />
        <Route exact path='/beers/new' component={NewBeer} />
        </Switch>
        </Fragment>
      </Router>
      
    );
  }
}

export default App;
