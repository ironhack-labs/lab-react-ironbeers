import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Beers from "./components/Beers";
import Beer from "./components/Beer";
import NewBeer from "./components/NewBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/random" component={Beer}/>
          <Route exact path="/beers/new" component={NewBeer}/>
          <Route exact path="/beers/:id" component={Beer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
