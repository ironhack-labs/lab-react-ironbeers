import React, { Component } from "react";
import HomePage from "./components/pages/Home";
import Beers from "./components/pages/Beers";
import RandomBeer from "./components/pages/RandomBeer";
import NewBeer from "./components/pages/NewBeer";
import SingleBeer from "./components/pages/SingleBeer";
import "./App.css";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/single-beer/:id" component={SingleBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
