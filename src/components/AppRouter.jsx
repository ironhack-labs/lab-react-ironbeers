import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllBeers from './AllBeers';
import Home from './Home';


const AppRouter = () => {

    return (

        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beers' component={AllBeers} />

        </Switch>


    )

}


export default AppRouter;










