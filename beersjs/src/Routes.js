
import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './components/Home';
import AllB from './components/beers/All';
import RandomB from './components/beers/Random';
import NewB from './components/beers/New';

const Routes = ()=>{
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/beers" component={AllB} />
            <Route exact path="/random" component={RandomB} />
            <Route exact path="/new" component={NewB} />
        </Switch>
    )
}
export default Routes