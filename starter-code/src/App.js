import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Beer from './components/Beer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/beers" component={AllBeers} />
            <Route path="/beers/:id" component={Beer} />
            <Route path="/new-beer" component={NewBeer} />
            <Route path="/random-beer" component={RandomBeer} />
          </Switch>
        </Router>
      </div>
    );
  }
}



export default App;
