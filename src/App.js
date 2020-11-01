import React, { Component } from 'react'
import './App.css';
import Home from './components/home/Home';
import { Route, Switch } from 'react-router-dom'
import Axios from 'axios'

import RandomBeer from './components/randombeer/RandomBeer';
import NewBeer from './components/newbeer/NewBeer';
import Header from './components/header/Header';
import AllBeers from './components/allbeers/AllBeers';
import BeerDetail from './components/beerdetail/BeerDetail';

const BEERS_FROM_DB = 'https://ih-beers-api2.herokuapp.com/beers'




export default class App extends Component {

  state = {
    beers: ''
  }

  componentDidMount () {
    Axios 
    .get(BEERS_FROM_DB)
    .then(response => {
        this.setState({ beers: response.data })
    })
  }

  render() {
    if(this.state.beers.length < 1 ) {
      return <h1>Loading</h1>
    }

    return (
      <div>
      <Route path='/beer' component={Header} />
    
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/beer/beers' render={(props) => <AllBeers {...props} beers={this.state.beers} /> }/>
       <Route exact path='/beer/beers/:idBeer' render={(props) => <BeerDetail {...props} beers={this.state.beers} /> }/>
 
       <Route exact path='/beer/random-beer' component={RandomBeer}/>
       <Route exact path='/beer/new-beer' component={NewBeer} /> 
     </Switch>
 
 
   </div>
    )
  }
}

