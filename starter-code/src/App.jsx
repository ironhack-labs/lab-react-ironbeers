import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import ViewBeers from "./viewBeers";
import ViewRandomBeer from "./viewRandomBeer";
import ViewNewBeer from "./viewNewBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div></div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/viewBeers" component={ViewBeers} />
          <Route path="/viewRandomBeer" component={ViewRandomBeer} />
          <Route path="/viewNewBeer" component={ViewNewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
