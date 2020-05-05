import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { Route, Switch, Link } from 'react-router-dom';
import ListBeers from './components/ListBeers'
import BeerDetails from './components/BeerDetails'
import NewBeer from './components/NewBeer'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <Link to="/">Home</Link>
        </header>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={ListBeers} />
        <Route exact path="/beers/:id" component={BeerDetails} />
        <Route exact path="/random-beer" component={BeerDetails} />
        <Route exact path="/new-beer" component={NewBeer} />
      </>
    );
  }
}

export default App;

/**
 * API: https://ih-beers-api2.herokuapp.com/beers
 *
 * get: https://ih-beers-api2.herokuapp.com/beers/
 * get: https://ih-beers-api2.herokuapp.com/beers/id
 * get: https://ih-beers-api2.herokuapp.com/beers/random
 * get: https://ih-beers-api2.herokuapp.com/beers/search?q=
 *
 * post: https://ih-beers-api2.herokuapp.com/beers/new
 */
