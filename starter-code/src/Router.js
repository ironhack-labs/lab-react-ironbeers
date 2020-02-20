import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Detail from './components/Detail'
import ListBeers from './components/ListBeers'
import Random from './components/Random'
import Create from './pages/Create'

const router = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/beers" component={ListBeers}/>
                <Route exact path="/:id" component={Detail}/>
                <Route exact path="/random" component={Random}/>
                <Route exact path="/create" component={Create}/>
            </Switch>
        </BrowserRouter>
    )

}

export default router