import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import BeerList from "./pages/BeerList";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import HomePage from "./pages/HomePage";
import BeerDetail from "./pages/BeerDetail";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/beers" exact component={BeerList} />
        <Route path="/beers/new" component={NewBeer} />
        <Route path="/beers/random" component={RandomBeer} />
        <Route path="/beers/:id" component={BeerDetail} />
      </Switch>
    </Router>
  );
};

export default App;
