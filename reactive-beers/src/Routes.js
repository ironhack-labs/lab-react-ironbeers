import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './component/Home';
import AllBeers from './component/beers/AllBeers';
import SingleBeer from './component/beers/SingleBeer';
import RandomBeer from './component/beers/RandomBeer';
import AddBeer from './component/beers/AddBeer';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/all" component={AllBeers} />
        <Route path="/single/:beerId" component={SingleBeer} />
        <Route path="/random" component={RandomBeer} />
        <Route path="/new" component={AddBeer} />
    </Switch>
)

export default Routes