import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomeContainer from "./components/home/HomeContainer"
import Header from './components/header/Header'
import BeersContainer from './components/beers/BeersContainer'
import BeerContainer from './components/beer/BeerContainer'
import FormContainer from './components/form/FormContainer'

const Router = () => (
    <BrowserRouter>
        <Route component={Header} />
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/beers" component={BeersContainer} />
            <Route exact path="/beer/:id" component={BeerContainer} />
            <Route exact path="/new-beer" component={FormContainer} />
        </Switch>
    </BrowserRouter>
)

export default Router