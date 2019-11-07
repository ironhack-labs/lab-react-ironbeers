import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ShowAllBeers from "./components/ShowAllBeers";
import RandomBeer from "./components/RandomBeer";
import SingleBeer from "./components/SingleBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={ShowAllBeers} />
          <Route exact path="/beers/random" component={RandomBeer} />
          <Route exact path="/beers/:_id" component={SingleBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
