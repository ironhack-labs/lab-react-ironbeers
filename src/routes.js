import { Switch, Route } from 'react-router-dom'

import React from 'react';
import { Component } from "react"
import IndexPage from './../pages/IndexPage/IndexPage'
import BeersPage from './BeersPage';
import RamdonBeer from './RamdonBeer'
import NewBeer from './components/NewBeer';

const Routes = () => {

    return (

        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/beers" exact render={() => <BeersPage />} />
            <Route path="/random-beer" render={props => <RamdonBeer />} />
            <Route path="/new-beer" render={() => <NewBeer />} />
        </Switch>
    )
}

export default Routes