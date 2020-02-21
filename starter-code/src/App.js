import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, NavLink } from "react-router-dom";
import Home from './views/Home'
import Beers from './views/Beers'
import OneBeer from './views/OneBeer'
import NewBeer from './views/NewBeer'
import RandomBeer from './views/RandomBeer'
import NotFound from './views/NotFound'

import { FaBeer } from 'react-icons/fa';


class App extends Component {
  render() {
    return (
      
      <div className="App">
          <header id="header-main">
          <NavLink exact to="/"><div id="home-icon"><FaBeer size={40} /></div></NavLink>
        </header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/beer/:id" component={OneBeer}/>
          <Route path="/beers" component={Beers}/>
          <Route path="/random-beer" component={RandomBeer}/>
          <Route path="/new-beer" component={NewBeer}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
