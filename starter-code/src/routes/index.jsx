import React from "react";

import { Switch, Route } from "react-router-dom";

import ListBeers from "./../views/listBeers";
import RandomBeer from "./../views/randomBeer";
import NewBeer from "./../views/newBeer";
import SingleBeer from "./../views/singlebeer";
import Home from "./../views/home";

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/listbeers" component={ListBeers} />
      <Route path="/randombeer" component={RandomBeer} />
      <Route path="/addbeer" component={NewBeer} />
      <Route path="/beer/:id" component={SingleBeer} />
    </Switch>
  );
}
