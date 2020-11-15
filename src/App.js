import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import {Switch, Route} from "react-router-dom";
import BeerList from './components/BeerList';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

class App extends Component{
  render(){
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={BeerList}/>
        <Route exact path="/beers/:id" component={BeerDetails}/>
        <Route exact path="/beers/random" component={RandomBeer}/>
        <Route exact path="/new" component={NewBeer}/>
      </Switch>
    </div>
  );
  }
}

export default App;
