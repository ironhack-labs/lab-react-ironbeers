import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import BeerDetail from "./pages/BeerDetail";
import Random from "./pages/Random";
import AddBeer from "./pages/AddBeer";




const Router = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={AllBeers} path="/all-beers" />
            <Route exact component={BeerDetail} path="/all-beers/:id" />
            <Route exact component={Random} path="/random-beer"/>
            <Route exact component={AddBeer} path="/new"/>
        </Switch>  
    </BrowserRouter>
)

export default Router;