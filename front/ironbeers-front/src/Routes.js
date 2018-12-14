import React from 'react'
import Home from './components/home/Home'
import AllBeers from './components/beers/AllBeers'
import { Switch, Route } from 'react-router-dom'

const Routes = () =>(
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/allbeers' component={AllBeers} />
    </Switch>
)

export default Routes