import React, { Component } from "react";
import logo from "./logo.svg";
import Home from "./Home";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./Header";
import Beers from "./Beers";
import BeerDetail from "./BeerDetail";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/beers" component={Beers} />
        <Home />
        <Route exact path="/beers/:id" component={BeerDetail} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/create-new-beer" component={NewBeer} />
      </div>
    );
  }
}

export default App;
