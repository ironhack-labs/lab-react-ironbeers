import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeComponentContainer from './components/Home/HomeComponentContainer'
import Beers from './components/Beers/Beer'

const Router = ()=>(
    <Switch>
        <Route exact path="/" component={HomeComponentContainer}/>
        <Route exact path="/beers" component={Beers}/>
    </Switch>
)

export default Router;
