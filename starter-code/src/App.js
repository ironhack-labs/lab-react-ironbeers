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
import { Newbeer } from "./pages/Newbeer";
import { BeerId } from "./pages/BeersInfo";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/beers" exact component={Beers} />
      <Route path="/random-beers" component={Randombeer} />
      <Route path="/new-beer" component={Newbeer} />
      <Route path="/beers/:id" component={BeerId} />
    </Switch>
  </Router>
);
export default App;
