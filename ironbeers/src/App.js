import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.js'
import Beers from './components/Beers/Beers.js'
import RandomBeer from './components/RandomBeer/RandomBeer.js'
import NewBeer from './components/NewBeer/NewBeer.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Beers" component={Beers}/>
          <Route exact path="/RandomBeer" component={RandomBeer} />
          <Route exact path="/NewBeer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
