import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js'
import Beers from './components/Beers.js';
import NewBeer from './components/NewBeer.js';
import RandomBeer from './components/RandomBeer.js';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>

          <Route exact path='/' component={Home} />
          <Route path='/beers' component={Beers} />
          <Route path='/new-beer' component={NewBeer} />
          <Route path='/random-beer' component={RandomBeer} />

        </Switch>

      </div>
    );
  }
}

export default App;