import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import AllBeers from "./components/AllBeers/AllBeers";
import BeerDetail from "./components/Beers/BeerDetail";
import RandomBeer from "./components/RandomBeer/RandomBeer";
import NewBeer from "./components/NewBeer/NewBer";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/all" component={AllBeers} />
    <Route exact path="/random" component={RandomBeer} />
    <Route exact path="/new" component={NewBeer} />
    <Route exact path="/single/:id" component={BeerDetail} />
  </Switch>
);

export default Routes;
