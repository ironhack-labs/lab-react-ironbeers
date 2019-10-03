import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import Beers from "./components/Beers";
// import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Switch>
          <Route exact path="/beers" component={Beers} />
        </Switch>
      </div>
    );
  }
}
