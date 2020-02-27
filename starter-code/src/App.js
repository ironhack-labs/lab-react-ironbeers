import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Beers from "./components/Beers.js";
import RandomBeer from "./components/RandomBeer.js";
import NewBeer from "./components/NewBeer.js";
import OneBeer from "./components/OneBeer.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/beers/:id" component={OneBeer} />
        </Switch>
      </div>
    );
  }
}
export default App;