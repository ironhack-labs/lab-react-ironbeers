import React, { Component } from "react";
import "./App.css";
import AllBeers from "./component/AllBeers";
import RandomBeers from "./component/RandomBeers";
import NewBeer from "./component/NewBeer";
import BeerDetail from "./component/BeerDetail";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={AllBeers} />
          <Route path="/beers/:_id" component={BeerDetail} />
          <Route path="/random-beer" component={RandomBeers} />
          <Route path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
