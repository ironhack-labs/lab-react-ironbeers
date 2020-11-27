import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import HomePage from './components/HomePage'
import AllBeers from './components/AllBeers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import BeersDetails from './components/BeersDetails'


const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/beers' component={AllBeers} exact/>
                <Route path='/random-beer' component={RandomBeer} exact/>
                <Route path='/new-beer' component={NewBeer} exact/>
                <Route path='/beers/:beerId' component={BeersDetails} exact/>
            </Switch>
        </Router>
    )
}

export default App