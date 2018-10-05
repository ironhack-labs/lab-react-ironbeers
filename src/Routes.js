import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';

const Routes = () => {
    return(
        <Switch>
             <Route exact path="/AllBeers" component={Beers}/>
             <Route exact path="/RandomBeer" component={RandomBeer}/>
             <Route exact path="/NewBeer" component={NewBeer}/>
        </Switch>
    )
}

export default Routes