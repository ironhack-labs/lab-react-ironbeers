import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import BeerDetail from "./components/BeerDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route path="/randombeer" component={RandomBeer} />
          <Route path="/newbeer" component={NewBeer} />
          <Route path="/beers/:beerId" component={BeerDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
