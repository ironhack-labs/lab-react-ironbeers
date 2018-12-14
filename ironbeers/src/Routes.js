import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/home/Home';
import All from './components/beers/All';
import New from './components/beers/New';
import Random from './components/beers/Random';


const Routes = ()=>{
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/all' component={All} />
            <Route exact path='/random' component={Random} />
            <Route exact path='/new' component={New} />
        </Switch>
    )
}

export default Routes;