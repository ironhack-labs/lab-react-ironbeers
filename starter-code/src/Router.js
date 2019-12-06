import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import Beers from "./components/Beers";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import Detail from "./components/Detail";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact component={Home} path="/"/>
            <Route exact component={Beers} path="/beers"/>
            <Route exact component={Detail} path="/beers/:id"/>
            <Route exact component={NewBeer} path="/random-beer"/>
            <Route exact component={RandomBeer} path="/new-beer"/>
        </Switch>
    </BrowserRouter>
)

export default Router