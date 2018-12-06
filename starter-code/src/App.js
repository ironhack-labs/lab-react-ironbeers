import React, { Component } from 'react';

import './App.css';
import { Switch, Link, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import RandomBeer from './Components/RandomBeer/RandomBeer'
import Beers from './Components/Beers/Beers'
import NewBeer from './Components/NewBeer/NewBeer'
import UnicBeer from './Components/UnicBeer/UnicBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
   
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/beers" component={Beers} />
              <Route exact path="/beers/:id" component={UnicBeer} />
              <Route exact path="/new-beer" component={NewBeer} />
              <Route exact path="/random-beer" component={RandomBeer} />
            </Switch>
      </div>
    );
  }
}

export default App;
