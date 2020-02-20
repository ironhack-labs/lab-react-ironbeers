import React, { Component } from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import newBeer from "./views/new-beer";
import beers from "./views/beers";
import randomBeer from "./views/random-beer";
import favoriteBeers from "./views/favorite-beers";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink>{" "}
          <NavLink to="/new-beer">New beer</NavLink>{" "}
          <NavLink to="/my-beers">my-beers</NavLink>{" "}
          <NavLink to="/random">random</NavLink>
        </nav>

        <Switch>
          <Route exact path="/" component={beers} />
          <Route path="/new-beer" component={newBeer} />
          <Route path="/my-beers" component={favoriteBeers} />
          <Route path="*" component={randomBeer} />
        </Switch>
      </div>
    );
  }
}
