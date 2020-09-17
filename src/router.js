import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'

// Dummy component
const AllBeers = () => <h1>All Beers</h1>
const SingleBeer = () => <h1>Single Beer</h1>
const RandomBeer = () => <h1>Random Beer</h1>
const NewBeer = () => <h1>New Beer</h1>
const SearchBeer = () => <h1>Search Beer</h1>

const router = () => (
    <Router>
        <Switch>
            <Route component={Home} path='/' exact />
            <Route component={AllBeers} path='/beers' exact/>
            <Route component={RandomBeer} path='/random-beer' exact/>
            <Route component={NewBeer} path='/new-beer' exact/>
            <Route component={SearchBeer} path='/search' exact/>
            <Route component={SingleBeer} path='/:beerId' />
        </Switch>
    </Router>
)

export default router