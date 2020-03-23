import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* --- UI Framework --- */

import "bootstrap/dist/css/bootstrap.min.css";

/* --- Styling --- */

import "./App.css";

/* --- Components --- */

import { Home } from "./pages/Home";
import { Beers } from "./pages/Beers";
import { Randombeer } from "./pages/Randombeer";
import { NewBeer } from "./pages/Newbeer";
import { BeerId } from "./pages/BeersInfo";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/beers" exact component={Beers} />
      <Route path="/beers/:id" component={BeerId} />
      <Route path="/random-beers" component={Randombeer} />
      <Route path="/create-beer" component={NewBeer} />
    </Switch>
  </Router>
);
export default App;
