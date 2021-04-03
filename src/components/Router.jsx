import { Route, Switch } from "react-router-dom";
import React from 'react'
import Home from "./Home/Home";
import NewBeer from "./NewBeer/NewBeer";
import BeersList from "./BeersList/BeersList";
import RandomBeer from "./RandomBeer/RandomBeer";
import NotFound from "./NotFound/NotFound";


const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/beers' component={BeersList}/>
            <Route exact path='/random' component={RandomBeer}/>
            <Route exact path='/new' component={NewBeer}/>
            <Route  component={NotFound}/>
        </Switch>
    );
};

export default Router