import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Beers from "./components/Beers.js";
import RandomBeer from "./components/RandomBeer.js";
import NewBeer from "./components/NewBeer.js";
import BeerDetail from "./components/BeerDetail.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/all" component={Beers}></Route>
          <Route path="/random" component={RandomBeer}></Route>
          <Route path="/new" component={NewBeer}></Route>
          <Route path="/single/:id" component={BeerDetail}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
