import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import RandomBeer from '../Pages/RandomBeer/RandomBeer'
import NavigationBar from '../NavBar/NavigationBar'
import NewBeer from '../Pages/NewBeer/NewBeer'
import AllBeers from '../Pages/AllBeers/AllBeers'
import BeersDetails from '../Pages/BeersDetails/BeersDetails'


export default function index() {
    return (
        <div>
            <Switch>
                <Route exact path="/" render={() => <HomePage />} />
                <Route exact path="/random-beer" render={() => {
                    return (<><NavigationBar /><RandomBeer /></>)
                }} />
                <Route exact path="/new-beer" render={() => {
                    return (<><NavigationBar /><NewBeer /></>)
                }} />
                <Route exact path="/beers" render={() => {
                    return (<><NavigationBar /><AllBeers /></>)
                }} />
                <Route exact path="/:id" render={(props) => {
                    return (<><NavigationBar /><BeersDetails {...props} /></>)
                }} />
            </Switch>
        </div>
    )
}
