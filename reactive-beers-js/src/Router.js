import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Beer from './components/Beer/Beer';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';
const Router = () => (

            <BrowserRouter>{/* Nos permite  el acceso a la API html5 y solo puede tener un hijo que será switchz*/}
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path='/beer' component={Beer}/>
                <Route exact path='/random-beer' component={RandomBeer} />
                <Route exact path="/new-beer" component={NewBeer} />
            </Switch>
            </BrowserRouter>

)
export default Router

