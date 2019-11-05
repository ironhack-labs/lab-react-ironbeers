import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// import Home from "./components/Home";
import ShowAllBeers from "./components/ShowAllBeers";
import RandomBeer from "./components/RandomBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/beers" component={ShowAllBeers} />
          <Route path="/random-beer" component={RandomBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
