import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import AllBeers from './components/AllBeers.js';
import RandomBeer from './components/RandomBeer.js';
import NewBeer from './components/NewBeer.js';
import Header from './components/Header.js';
// import './App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h4>soy un titulo</h4>
        <Link to="/all-beers">All beers</Link>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <h4>soy un titulo</h4>
        <Link to="/random-beer">Random beer</Link>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <h4>soy un titulo</h4>
        <Link to="/new-beer">New beer</Link>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <Switch>
          <Route exact path="/all-beers" render={() => <AllBeers />} />
          <Route exact path="/random-beer" render={() => <RandomBeer />} />
          <Route exact path="/new-beer" render={() => <NewBeer />} />
        </Switch>
      </div>
    );
  }
}

export default Home;
