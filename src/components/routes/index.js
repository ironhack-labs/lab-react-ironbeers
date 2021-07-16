import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './../pages/Home'
import ListBeers from './../pages/ListBeers'
import SingleBeer from './../pages/SingleBeer'
import RandomBeer from './../pages/RandomBeer'
import NewBeer from './../pages/NewBeer'



const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/cervezas" exact render={() => <ListBeers />} />
            <Route path="/cervezas/detalle/:beer_id" render={props => <SingleBeer {...props} />} />
            <Route path="/cervezas/random" render={props => <RandomBeer {...props} />} />
            <Route path="/cervezas/crear" render={() => <NewBeer />} />
        </Switch>
    )
}

export default Routes