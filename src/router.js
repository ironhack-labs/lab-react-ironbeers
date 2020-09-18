import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import AllBeers from './pages/AllBeers'
import SingleBeer from './pages/SingleBeer'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'


const router = () => {
    return (
        <Router>
            <Switch>
                <Route component={Home} path='/' exact />
                <Route component={AllBeers} path='/beers' exact />
                <Route component={RandomBeer} path='/beers/random' />
                <Route component={NewBeer} path='/beers/new' />
                <Route component={SingleBeer} path='/beers/:beerId' />
            </Switch>
        </Router>
    )
}

export default router
