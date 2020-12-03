import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './Home'
import ListBeers from './ListBeers'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import BeersDetails from './BeersDetails'
import RandomBeers from './RandomBeers'

function App() {

    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" render={() => <Home />}/>
                <Route exact path="/beers" render={() => <ListBeers />} />
                <Route exact path="/beers/:beersId" render={props => <BeersDetails {...props} />} />
                <Route exact path="/random-beer" render= {props => <RandomBeers {...props}/> }/>
            </Switch>
            </>
    )

}

export default App