import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Beers from "./pages/Beers";
import NewBeer from "./pages/NewBeer";
import HomePage from "./pages/HomePage";
import BeerDetail from "./pages/BeerDetail";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/beers" exact component={Beers} />
        <Route path="/beers/new" component={NewBeer} /> />
        <Route path="/beers/:id" component={BeerDetail} />
      </Switch>
    </Router>
  );
};

export default App;
