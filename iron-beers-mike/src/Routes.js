import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './components/home/Home'
import New from './components/beers/New'
import Random from './components/beers/Random'
import All from './components/beers/All'

const Routes = ()=>{
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/beers" component={All} />
            <Route path="/new-beer" component={New} />
            <Route path="/random-beer" component={Random} />
        </Switch>
    )
}
export default Routes
