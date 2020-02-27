import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import Home from './components/home/Home'
import ListBeers from './components/beers/ListBeers'
import RandomBeer from './components/beers/RandomBeer'
import SingleBeer from './components/beers/SingleBeer'



class App extends Component {
  render() {

    return (

      <div className="App">

        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/beers" render={() => <ListBeers />} />
          <Route path="/random" render={() => <RandomBeer />} />
          <Route path="/:id" render={match => <SingleBeer {...match} />} />
        </Switch>

      </div>
    );
  }
}

export default App;
