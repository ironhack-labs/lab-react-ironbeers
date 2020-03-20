import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home.Page";
import { Beers } from "./pages/Beers.Page";
import { BeerId } from "./pages/BeerId.Pages";
import { RandomBeer } from "./pages/RandomBeer.Page";
import { NewBeer } from "./pages/NewBeer.Page";

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Beers" component={Beers} />
      <Route exact path="/Beers/:id" component={BeerId} />
      <Route exact path="/RandomBeer" component={RandomBeer} />
      <Route exact path="/NewBeer" component={NewBeer} />
    </Switch>
  </Router>
);
