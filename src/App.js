import React, { Component } from 'react'
import './App.css';
import Home from './components/home/Home';
import { Route, Switch } from 'react-router-dom'

import RandomBeer from './components/randombeer/RandomBeer';
import NewBeer from './components/newbeer/NewBeer';
import Header from './components/header/Header';
import AllBeers from './components/allbeers/AllBeers';
import BeerDetail from './components/beerdetail/BeerDetail';


export default class App extends Component {

  state = {
    beers: ''
  }

  updateStateAppJs = (beersFromDB) => {
    this.setState({beers: beersFromDB})
  }

  render() {

    return (
      <div>
      <Route path='/beer' component={Header} />
    
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/beer/beers' render= {() => <AllBeers  updateStateAppJs={this.updateStateAppJs}/>}/>
       <Route exact path='/beer/beers/:idBeer' render={(props) => <BeerDetail {...props} beers={this.state.beers} /> }/>
 
       <Route exact path='/beer/random-beer' component={RandomBeer}/>
       <Route exact path='/beer/new-beer' component={NewBeer} /> 
     </Switch>
 
 
   </div>
    )
  }
}



