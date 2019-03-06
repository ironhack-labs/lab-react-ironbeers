import React from  'react';
import { Route, Switch}     from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Beers from "./Component/Beers";
import RandomBeers from "./Component/RandomBeers";
import Newbeer from "./Component/Newbeer";


const Router = () => (
  <Switch>
    <Route exact path = "/"    component = { Home } />
    <Route exact path = "/beers"    component = { Beers } />
    <Route exact path = "/randombeers"    component = { RandomBeers } />
    <Route exact path = "/newbeer"    component = { Newbeer } />
  </Switch>
)

export default Router;