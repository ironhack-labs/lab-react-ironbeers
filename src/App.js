import React, { Component } from 'react';
import './App.css';
import { Route,Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Beers from './components/Beers/Beers'
import NewBeer from './components/NewBeer/NewBeers'
import RandomBeer from './components/RandomBeer/RandomBeers'
import Home from './components/Home/Home'
import BeerDetail from './components/BeerDetail/BeerDetail'

export default class App extends Component {
  
render() {
  return (
    <div className="App">
          <NavBar/>
    <Switch>
    <Route path="/beers/:id" component={BeerDetail} ></Route>
          <Route exact path='/' component={Home}/>
          <Route path='/beers' >
          <Beers />
          </Route>
          <Route path='/random-beer' component={RandomBeer}/>
          <Route path='/new-beer' component={NewBeer}/>

          
        </Switch>
    </div>
  ); 
}
}


