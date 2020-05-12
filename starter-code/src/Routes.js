import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Beers from "./components/Beers";
import SingleBeer from "./components/SingleBeer";
import RandomBeer from "./components/RandomBeer";
import BeerForm from "./components/BeerForm";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={BeerForm} />
        <Route exact path="/beers/:id" component={SingleBeer} />
    </Switch>
);

export default Routes;



