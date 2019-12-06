import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Home from "./components/Home/Home";
import NewBeer from "./components/NewBeer/NewBeer";
import AllBeers from "./components/AllBeers/AllBeers";
import RandomBeer from "./components/RandomBeer/RandomBeer";
import OneBeer from "./components/OneBeer/OneBeer";



const Router = () => (
  <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={AllBeers} path="/beers" />
			<Route exact component={OneBeer} path="/beers/:id" />
      <Route exact component={RandomBeer} path="/random-beer" />
			<Route exact component={NewBeer} path="/new-beer" />
    </Switch>
  </BrowserRouter>
);

export default Router;