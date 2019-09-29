import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AllBeers from "./components/AllBeers";
import BeerDetail from "./components/BeerDetail";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Home} />
          <Switch>
            <Route exact path="/all-beers" component={AllBeers} />
            <Route exact path="/beers/:id" component={BeerDetail} />
            <Route exact path="/random-beer" component={RandomBeer} />
            <Route exact path="/new-beer" component={NewBeer} />
          </Switch>
      </div>
    );
  }
}

export default App;
