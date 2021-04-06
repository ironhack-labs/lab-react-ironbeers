import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AllBeers from './AllBeers';
import Home from './Home';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';


const AppRouter = () => {

    return (

        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beers' component={AllBeers} />
            <Route exact path='/random-beer' component={RandomBeer} />
            <Route exact  path='/new-beer' component={NewBeer} />


        </Switch>


    )

}


export default AppRouter;










