import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Beers from './components/Beers'
import SingleBeer from './components/SingleBeer'
import NewBeer from './components/NewBeer'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/beers/:id" component={SingleBeer} />
          <Route path="/beers" component={Beers} />
          <Route path="/random-beer" component={SingleBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route  path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
