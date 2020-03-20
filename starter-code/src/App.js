import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home.Page";
import { NewBeers } from "./pages/NewBeer.Page";
import { RandomBeers } from "./pages/RandomBeers.Page";
import { Beers } from "./pages/Beers.Page";
import { BeerId } from "./pages/BeerId.Pages";

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Beers" component={Beers} />
      <Route exact path="/Beers/:id" component={BeerId} />
      <Route exact path="/RandomBeers" component={RandomBeers} />
      <Route exact path="/NewBeers" component={NewBeers} />
    </Switch>
  </Router>
);
