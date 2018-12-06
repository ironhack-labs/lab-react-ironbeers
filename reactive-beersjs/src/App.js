import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from "react-router-dom";
import Beers from './components/Beers'
import Randombeer from './components/Randombeer'
import NewBeer from './components/NewBeer'
import Home from './components/Home'

class App extends Component {
  constructor(){
    super()
  }


  render() {

    return (
      <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={Randombeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
