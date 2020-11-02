import React, { Component } from 'react';
import './App.css';
import { Route , Switch } from 'react-router-dom'
import Home from './Components/Home';
import Beers from '../src/Components/Beers';



const BeerApi = 'https://ih-beers-api2.herokuapp.com/beers'

export default class App extends Component{
 
  render(){
  
    return (
    <div className="App">
     <Home />
     <Route path='/beers' component={Beers}></Route>
    </div>
  )

}
}

