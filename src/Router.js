import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'
import Home from './pages/Home'
import ListBeers from './pages/ListBeers'

//const Home=()=><h1>Home</h1>
//const ListBeers=()=><h1>ListBeers</h1>
const RandomBeer=()=><h1>RandomBeer</h1>
const NewBeer=()=><h1>NewBeer</h1>


export default function RouterApp() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/beers' component={ListBeers} exact/>
                    <Route path='/random-beer' component={RandomBeer} exact/>
                    <Route path='/new-beer' component={NewBeer} exact/>
                </Switch>
            </Router>
            
        </div>
    )
}
