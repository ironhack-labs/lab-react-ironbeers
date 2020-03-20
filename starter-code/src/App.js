import React from "react";
import { Home } from "./pages/Home.page";
import { AllBeers } from "./pages/Beers.page";
import { RandomBeer } from "./pages/Random.page";
import { NewBeer } from "./pages/New.page";
import { IdBeer } from "./pages/IdBeer.page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/beers" component={AllBeers}></Route>
        <Route path="/beers/:id" component={IdBeer}></Route>
        <Route path="/random-beer" component={RandomBeer}></Route>
        <Route path="/new-beer" component={NewBeer}></Route>
      </Switch>
    </Router>
  );
};
