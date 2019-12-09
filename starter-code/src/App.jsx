import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/Home";
import NewBeer from "./views/NewBeer";
import RandomBeer from "./views/RandomBeer";
import AllBeers from "./views/AllBeers";
import SingleBeer from "./views/SingleBeer";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/new-beer">
          <NewBeer />
        </Route>
        <Route path="/random-beer">
          <RandomBeer />
        </Route>
        <Route path="/beers/:id" component={SingleBeer}/>
        <Route path="/beers">
          <AllBeers />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    );
  }
}

export default App;
