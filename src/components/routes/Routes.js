import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from "./../pages/Home/Home"
import AllBeers from "./../pages/AllBeers/AllBeers"
import BeerDetails from "./../pages/BeerDetails/BeerDetails"
import RandomBeer from "./../pages/RandomBeer/RandomBeer"


const Routes = () => {

    return (

        <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/beers" exact render={() => <AllBeers />} />
            <Route path="/beers/:beerId" render={props => <BeerDetails {...props} />} />
            <Route path="/random-beer" render={() => <RandomBeer />} />
            {/* <Route path="/new-beer" render={() => <NewBeer />} /> */}
        </Switch>

    )
}

export default Routes