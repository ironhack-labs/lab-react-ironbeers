import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Beers from './pages/Beers'
import Beer from './pages/Beer'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'

const RouterApp = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/beers' component={Beers} />
                <Route path='/beer/:id' component={Beer} />
                <Route path='/random-beer' component={RandomBeer} />
                <Route path='/new-beer' component={NewBeer} />
            </Switch>
        </Router>
    )
}

export default RouterApp
