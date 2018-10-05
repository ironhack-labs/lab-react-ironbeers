import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Beers from "./components/Beers";
import DetailBeer from "./components/DetailBeer";


const Routes = () => {
    return (
        <Switch>

            <Route exact path="/beers" component={Beers} />
            <Route path="/randombeer" component={RandomBeer} />
            <Route path='/newbeer' component={NewBeer}/>
            <Route path="/beers/:id" component={DetailBeer} />

        </Switch >
    )
}
export default Routes