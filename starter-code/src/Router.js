import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home.js';
import Beers from './pages/Beers.js';
import 'antd/dist/antd.css'
import {BeerDetails} from "./pages/BeerDetails";
import {RandomBeer} from "./pages/RandomBeer";
import {NewBeer} from "./pages/NewBeer";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/beers" component={Beers}/>
                <Route exact path="/beer/:id" component={BeerDetails}/>
                <Route exact path="/random-beer" component={RandomBeer}/>
                <Route exact path="/new-beer" component={NewBeer}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
