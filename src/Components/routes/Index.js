import { Switch, Route } from "react-router-dom"
import AllBeers from "../pages/AllBeers"
import NewBeer from "../pages/NewBeer"
import RandomBeer from "../pages/RandomBeer"
import React from 'react';
import Home from "../pages/Home"
import SelectedBeer from "../pages/SelectedBeer";





const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={()=> <Home />}/>
            <Route path="/beers" exact render={(props) => <AllBeers {...props} />} />
            <Route path="/beers/:beer_id" exact render={(props) => <SelectedBeer {...props} />} />
            <Route path="/new" render={(props) => <RandomBeer {...props} />} />
            <Route path="/random/:beer_id" render={(props) => <NewBeer {...props} />} />

        </Switch>
    )
}

export default Routes