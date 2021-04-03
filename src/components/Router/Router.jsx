import React from 'react'
import { Route, Switch } from 'react-router-dom'

//views
import Home from '../views/Home/Home'
import AllBeers from '../views/AllBeers/AllBeers'
import RandomBeer from '../views/RandomBeer/RandomBeer'
import NewBeer from '../views/NewBeer/NewBeer'

const Router = ({beersData, loading}) => {

    return(
        <Switch>

            <Route exact path="/" component={Home} />
            <Route 
                path="/beers" 
                render={ props =>  <AllBeers props={props} beersData={beersData} loading={loading} /> } 
            /> 
            <Route exact path="/random-beer" component={RandomBeer} />
            <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
    )

}

export default Router