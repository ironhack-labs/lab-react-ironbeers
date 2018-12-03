import React from 'react';
import {Switch, Route} from  'react-router-dom';
import Home from './Home'
import Beers from './Beers'
import Detail from './Detail'
import NewBeer from './NewBeer'

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/beers' component={Beers}/>
        <Route exact path="/beers/:id" component={Detail} />
        <Route exact path="/random-beer" component={Detail} />
        <Route path="/new-beer" component={NewBeer} />
    </Switch>
);

export default Router;