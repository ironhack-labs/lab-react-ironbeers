import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Beers } from "./components/Beers";
import { RandomBeer } from "./components/RandomBeer";
import { NewBeer } from "./components/NewBeer";
import { Home } from "./components/Home";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/beers" component={Beers} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
