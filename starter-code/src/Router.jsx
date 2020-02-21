import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import index from './Pages/index';
import allBeers from './Pages/allBeers';
import BeerDetail from './Pages/BeerDetail'
import randomBeer from './Pages/randomBeer';
import NavBar from './components/Navbar';


const Router = () => {
    return (      
        <BrowserRouter>
            <NavBar/>
                <Switch>
                    <Route exact path='/' component={index}/>
                    <Route exact path='/beers' component={allBeers} />
                    <Route exact path='/randomBeer' component={randomBeer} />
                    <Route exact path='/detail/:id' component={BeerDetail} />
                </Switch>
        </BrowserRouter>
    )
}

export default Router




