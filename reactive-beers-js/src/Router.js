import React from  'react';
import { Route, Switch}     from "react-router-dom";
import Home from "./Component/Home";
import Beers from "./Component/Beers";
import RandomBeers from "./Component/RandomBeers";
import Newbeer from "./Component/NewBeer";
import Find from "./Component/Find";
import SingleBeer from "./Component/SingleBeer";


const Router = () => (
  <Switch>
    <Route exact path = "/"    component = { Home } />
    <Route exact path = "/beers"    component = { Beers } />
    <Route exact path = "/randombeers"    component = { RandomBeers } />
    <Route exact path = "/newbeer"    component = { Newbeer } />
    <Route exact path = "/searchbeer"    component = { Find } />
    <Route exact path = "/single/:id"    component = { SingleBeer } />
  </Switch>
)

export default Router;