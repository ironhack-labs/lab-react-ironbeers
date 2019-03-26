import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import AllBeers from './components/AllBeers';
import Navbar from './components/Navbar';
import RandomBeer from './components/RandomBeer'


class App extends Component {
componentDidMount(){
  axios.get("https://ironbeer-api.herokuapp.com/beers/all")
}

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path ='/beers' component = {AllBeers}/>
          <Route exact path ='/random-beer' component = {RandomBeer}/>
        </Switch>      
      </div>
    );
  }
}

export default App;
