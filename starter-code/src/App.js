import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Beer } from "./pages/Beers";
import { RandomBeer } from "./pages/Random-beer";
import { BeerDetail } from "./pages/BeerDetail";
import { NewBeer } from "./pages/New-beer";

export const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/beers" component={Beer}></Route>
        <Route exact path="/beer/:id" component={BeerDetail}></Route>
        <Route exact path="/random-beer" component={RandomBeer}></Route>
        <Route exact path="/new-beer" component={NewBeer}></Route>
      </Switch>
    </div>
  );
};
