import React from 'react'
import { Route, Switch } from 'react-router-dom'

//views
import Home from '../views/Home/Home'
import AllBeers from '../views/AllBeers/AllBeers'

const Router = () => {

    return(
             <Switch>
                 <Route exact path="/home" component={Home} />
                 <Route exact path="/beers" component={AllBeers} />
             </Switch>
    )

}

export default Router