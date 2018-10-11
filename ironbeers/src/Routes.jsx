import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Beers from './components/BeersContainer'

const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/beers' component={Beers} />
        </Switch>
    )
}
 export default Routes
