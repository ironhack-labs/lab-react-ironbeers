import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AllBeers from "./Components/AllBeers";
import RandomBeer from "./Components/RandomBeer";
import NewBeer from "./Components/NewBeer";
import Navbar from "./Components/Navbar";
import BeerDetails from "./Components/BeerDetails";
import Home from "./Components/Home";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/beers/:id" component={BeerDetails} />
          <Route path="/beers" component={AllBeers} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
