import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import ListBeers from "./components/ListBeers";
import SingleBeer from "./components/SingleBeer";
import RandomBeer from "./components/RandomBeer";


import { Link, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={ListBeers} />
          <Route exact path="/:id" component={SingleBeer} />
          <Route exact path="/random" component={RandomBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
