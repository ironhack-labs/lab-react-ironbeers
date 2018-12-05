import React, { Component } from 'react';
import './App.css';
import { Switch, Route, NavLink } from "react-router-dom";

import HomePage from "./components/HomePage";
import Beers from "./components/Beers";
import BeerDetail from "./components/BeerDetail";
import NewBeer from "./components/NewBeer";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Beer's Application</h1>

          <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/beers">Beers</NavLink>
          </nav>
        </header>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/beers/new" component={NewBeer} />
          <Route path="/beers/:beerId" component={BeerDetail} />
          <Route path="/beers" component={Beers} />
        </Switch>

        <footer>
          Made with 🍻 by Mathis
        </footer>
      </div>
    );
  }
}

export default App;
