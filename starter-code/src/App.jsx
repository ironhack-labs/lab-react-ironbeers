import React, { Component } from 'react';
import logo from './logo.svg';
import {Switch, Route} from "react-router-dom";

import NavMain from "./components/NavMain";
import Home from "./views/Home";
import Beers from "./views/Beers";
import RandomBeer from "./views/RandomBeer";
import NewBeer from "./views/NewBeer";
import BeerId from "./views/BeerId";
import NotFound from "./views/NotFound";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavMain />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/all-beers" component={Beers} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/all-beers/:id" component={BeerId} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
