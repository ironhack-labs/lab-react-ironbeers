import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import BeerDetail from "./pages/BeerDetail";


export default function router  () {
    return (
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home}  />
          <Route exact path="/allBeers" component={AllBeers} />
          <Route exact path="/beers/:id" component={BeerDetail} />
          <Route exact path="/randomBeer" component={RandomBeer} />
          </Switch>
    </BrowserRouter>
    );
  };