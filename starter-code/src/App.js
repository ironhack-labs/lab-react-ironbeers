import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Beers } from "./pages/BeersList";
import { BeerId } from "./pages/BeerId";
import { RandomBeer } from "./pages/BeerRandom";

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={Beers} />
      <Route path="/beers/:id" component={BeerId} />
      <Route path="/beer-random" component={RandomBeer} />
      {/* <Route path="/new-beer" component={NewBeer} /> */}
    </Switch>
  </Router>
);
