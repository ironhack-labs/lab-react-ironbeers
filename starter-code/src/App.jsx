import React, { Component } from 'react';
import {  Switch, Route}  from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Home from './views/Home.jsx'
import Beers from './views/Beers.jsx'
import RandomBeer from './views/RandomBeer'
import BeerDetail from './views/BeerDetail'
import AddBeer from './views/AddBeer'

class App extends Component {
  render() {
    return (
      <div className="App">
    
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={Beers} />
      <Route exact path="/new-beer" component={AddBeer} />
      <Route exact path="/random-beer" component={RandomBeer} />
      <Route exact path="/beer/:id" component={BeerDetail} />
      </Switch>
      </div>
    );
  }
}

export default App;
