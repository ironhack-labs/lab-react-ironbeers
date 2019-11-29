import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// import axios from "axios";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import BeersList from "./components/BeersList";
import Beer from "./components/Beer";
import NewBeer from "./components/NewBeer";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <>
            <Navbar />
            <Route exact path="/beers" component={BeersList} />
            <Route exact path="/beer/:beerId" component={Beer} />
            <Route exact path="/random-beer" component={Beer} />
            <Route exact path="/new-beer" component={NewBeer} />
          </>
        </Switch>
      </div>
    );
  }
}

export default App;
