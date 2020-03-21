import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/beers" exact component={() => <AllBeers />} />
      <Route path="/random-beer" exact component={() => <RandomBeer />} />
      <Route path="/new-beer" exact component={() => <NewBeer />} />
    </Switch>
  </Router>
);
export default App;
