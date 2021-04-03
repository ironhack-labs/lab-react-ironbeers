import React from 'react'
import { Route, Switch } from 'react-router-dom'

//views
import Home from '../views/Home/Home'
import AllBeers from '../views/AllBeers/AllBeers'
import RandomBeer from '../views/RandomBeer/RandomBeer'
import NewBeer from '../views/NewBeer/NewBeer'

const Router = () => {

    return(
             <Switch>
                 <Route exact path="/home" component={Home} />
                 <Route exact path="/beers" component={AllBeers} />
                 <Route exact path="/random-beer" component={RandomBeer} />
                 <Route exact path="/new-beer" component={NewBeer} />
             </Switch>
    )

}

export default Router