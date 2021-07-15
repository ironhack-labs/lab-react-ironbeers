import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home.js';
import BeersContainer from '../beers/BeersContainer.js';

const Routes = () => {

    return (
        <Switch>
            <Route path="/" render={() => <Home />} exact />
            <Route path="/beers/:whichBeer" render={props => <BeersContainer {...props} />} />
        </Switch>
    )

}

export default Routes


