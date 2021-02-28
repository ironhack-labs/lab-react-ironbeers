import './App.css';
import { Route, Switch } from "react-router-dom";
import React from 'react'
import Nav from "./comp/Nav";
import Home from "./comp/Home";
import Beers from "./comp/Beers";
import RandomBeer from "./comp/RandomBeer";
import NewBeer from "./comp/NewBeer";
import BeerDetails from './comp/BeerDetails'


export default function App() {
    return (
        <>
         <div className="App">
             <Nav />
             <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/beers' component={Beers} />
                <Route exact path='/beers/:id' component={BeerDetails} />
                <Route exact path='/random-beer' component={RandomBeer} />
                <Route exact path='/new-beer' component={NewBeer} />
             </Switch>
         </div>
            
        </>
    )
}
