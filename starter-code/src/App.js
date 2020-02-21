import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Header from "./views/Header";
import Allbeers from "./views/Allbeers";
import Randombeer from "./views/Randombeer";
import Newbeer from "./views/Newbeer";
import Singlebeer from "./views/Singlebeer";


class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Home /> */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beers" component={Allbeers} />
        <Route path="/beer/:Id" component={Singlebeer} />
        <Route path="/beer/random" component={Randombeer} />
        <Route path="/newbeer" component={Newbeer} />
      </Switch>
      </div>
    );
  }
}

export default App;
