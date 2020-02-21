import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./views/Home";
import ListBeers from "./views/ListBeers";
import NewBeer from "./views/NewBeer";
import RandomBeer from "./views/RandomBeer";
import OneBeer from "./views/OneBeer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMain />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={ListBeers} />
          <Route path="/beers/:beerId" component={OneBeer} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
