import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Beers from "./views/Beers";
import Home from "./views/Home";
import NewBeer from "./views/NewBeer";
import RandomBeer from "./views/RandomBeer";
import BeerId from "./views/BeerId";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/:id" component={BeerId} />
        </Switch>
      </div>
    );
  }
}

export default App;
