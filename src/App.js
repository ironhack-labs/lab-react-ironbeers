import React from 'react';
import './App.css';
import { Route , Switch } from 'react-router-dom'
import Home from './Components/Home';
import Beers from './Components/Beers';
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';
import BeerDetails from './Components/BeerDetails';



export default function App(){ 

    return (
    <div className="App">
    <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/beers' component={Beers} />
     <Route exact path='/beers/:id' component={BeerDetails} />
     <Route exact path='/random-beer' component={RandomBeer} />
     <Route exact path='/new-beer' component={NewBeer} />
    </Switch>
    </div>
  )
}

