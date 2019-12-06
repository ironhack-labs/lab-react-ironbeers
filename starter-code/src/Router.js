import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Beers from "./pages/Beers/Beers";
import RandomBeer from "./pages/RandomBeer/RandomBeer";
import BeerDetails from "./pages/BeerDetails/BeerDetails";
import NewBeer from "./pages/NewBeer/NewBeer";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home }  />
      <Route exact path="/beers" component={ Beers }  />
      <Route exact path="/random-beer" component= { RandomBeer } />
      <Route exact path="/new-beer" component={ NewBeer } />
      <Route exact path="/beers/:id" component={BeerDetails} />
    </Switch>
  </BrowserRouter>
);

export default Router;