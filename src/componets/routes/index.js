import { Switch, Route } from 'react-router-dom'
import IndexPage from './../pages/indexpages/IndexPage.js'
import React from 'react';
import BeersList from '../pages/BeersPages.js';




const Routes = () => {

    return (

        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/beers" exact render={() => <BeersList />} />
        </Switch>



    )
}

export default Routes