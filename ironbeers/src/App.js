import React, { Component } from "react";
import Beers from "../src/components/Beers/Beers";
import Home from "../src/components/Home/Home"
import NewBeer from "../src/components/Beers/NewBeer";
import RandomBeer from "../src/components/Beers/RandomBeer";
import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Beers" component={Beers} />
          <Route exact path="/NewBeer" component={NewBeer} />
          <Route exact path="/RandomBeer" component={RandomBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
