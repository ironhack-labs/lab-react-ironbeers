import React, { Component } from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import newBeer from "./views/new-beer";
import beers from "./views/beers";
import randomBeer from "./views/random-beer";
import favoriteBeers from "./views/favorite-beers";
import FontAwesome from "react-fontawesome";
import beer from "./views/beer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="flex">
            <NavLink to="/new-beer">
              <FontAwesome className="" name="home" /> Home
            </NavLink>
            <NavLink to="/">
              <FontAwesome className="" name="beer" /> Beers
            </NavLink>
            <NavLink to="/my-beers">
              <FontAwesome className="" name="star" /> Favorites
            </NavLink>
            
            <NavLink to="/random"><FontAwesome className="" name="question" /> Random</NavLink>
          </nav>
        </header>
        <div className="main-content grid">
          <Switch>
            <Route exact path="/" component={beers} />
            <Route path="/new-beer" component={newBeer} />
            <Route path="/my-beers" component={favoriteBeers} />
            <Route path="/beers/:id" component={beer} />
            <Route path="*" component={randomBeer} />
          </Switch>
        </div>
      </div>
    );
  }
}
