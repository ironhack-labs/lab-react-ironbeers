import {BrowserRouter,Route,Switch} from "react-router-dom"
import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'

//const Home=()=> <h1>Si imprime????</h1>

const Router = () => {
    return (
        <BrowserRouter>
        <Nav />
<Switch>
<Route path="/" component={Home} exact />
<Route path="/beers" component={Beers} exact />
<Route path="/random-beer" component={RandomBeer} exact />
<Route path="/new-beer" component={NewBeer} exact />
</Switch>
        </BrowserRouter>
            
        
    )
}

export default Router
