import React, { Component } from "react";
import "./App.css";
import Beers from "./Beers";
import BeerDetail from "./BeerDetail";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";
import Home from "./Home";
import Navbar from "./Navbar";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:id" component={BeerDetail} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </div>
    );
  }
}

export default App;
