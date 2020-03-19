import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Beers from "./pages/Beers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import HomePage from "./pages/HomePage";
import Header from "./layouts/Header";
import Main from "./layouts/Main";

const App = () => (
  <Router>
    <Main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/beers" exact component={Beers} />
        <Route path="/beers/new" component={NewBeer} />
        <Route path="/beers/random" component={RandomBeer} />
      </Switch>
    </Main>
  </Router>
);

export default App;
