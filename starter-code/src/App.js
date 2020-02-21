import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Navlink, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import BeerList from "./components/BeerList";
import Beer from "./components/Beer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/beers/:id" component={Beer} />
          <Route path="/beers" component={BeerList} />
          <Route path="/beers/random" component={Beer} />
          <Route path="/newBeer" component={Beer} />
        </Switch>
      </div>
    );
  }
}

export default App;
