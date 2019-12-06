import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllBeers from './pages/AllBeers';
import BeerDetail from './pages/BeerDetail';
import BeerRandom from './pages/BeerDetail/RandomBeer';
import AddBeerComp from './pages/NewBeer';
//import NewBeer from "./pages/NewBeer";

const Router = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact component={Home} path="/"/>
            <Route exact component={AllBeers} path="/all-beers"/>
            <Route excat component={BeerDetail} path="/all-beers/:id"/>
            <Route exact component={BeerRandom} path= "/random"/>
            <Route exact component={AddBeerComp} path="/new"/>
        </Switch>
    </BrowserRouter>
);

export default Router;