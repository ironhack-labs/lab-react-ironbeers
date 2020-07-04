import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import AllBeers from './AllBeers';
import NewBeer from './NewBeer';
import './App.css';
import RandomBeer from './RandomBeer';
import SingleBeer from './SingleBeer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="home"></div>

        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route
            exact
            path="/beers"
            render={props => <AllBeers {...props} />}
          />
          <Route
            exact
            path="/random-beer"
            render={props => <RandomBeer {...props} />}
          />
          <Route
            exact
            path="/new-beer"
            render={props => <NewBeer {...props} />}
          />
          <Route
            exact
            path="/:beerId"
            render={props => <SingleBeer {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
