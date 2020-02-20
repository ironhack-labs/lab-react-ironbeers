import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import AllBeers from './pages/AllBeers'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'
import BeerDisplay from './pages/BeerDisplay'

//Ordenar las rutas por el numero de slashes que tengan.
const router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/allbeers' component={AllBeers} exact/>
                <Route path='/randombeer' component={RandomBeer} exact/>
                <Route path='/newbeer' component={NewBeer} exact/>
                <Route path='/beer/:beerId' component={BeerDisplay} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default router