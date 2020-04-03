import React, { Component } from 'react';
import Homepage from './components/Homepage';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import { Switch, Route } from "react-router-dom";
import DetailedBeer from './components/DetailedBeer';
import logo from './logo.svg';
import { Link } from "react-router-dom";
import './App.css';

class App extends Component {


  render() {
    return (
      <div>
      
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path="/beers" component={Beers}/>
        <Route exact path="/beers/:id" component={DetailedBeer}/>
        <Route exact path="/randombeer" component={RandomBeer}/>
        <Route exact path="/new-beer" component={NewBeer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
