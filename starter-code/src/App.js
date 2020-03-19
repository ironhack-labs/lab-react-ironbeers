import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* --- UI Framework --- */

import "bootstrap/dist/css/bootstrap.min.css";

/* --- Styling --- */

import "./App.css";

/* --- Components --- */

import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { Beers } from "./pages/Beers";
import { Randombeer } from "./pages/Randombeer";
import { Newbeer } from "./pages/Newbeer";

const App = () => (
  <Router>
    <Layout />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/beers" component={Beers} />
      <Route path="/random-beers" component={Randombeer} />
      <Route path="/new-beer" component={Newbeer} />
    </Switch>
  </Router>
);
export default App;
