import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Beers from './Beers'
import RandomBeer from './RandomBeer'
import {Route,Link, Switch} from 'react-router-dom';
import BeerDetail from './BeerDetail'
 




export default class App extends Component {



  render() {
    return (
      <div className = "App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/beers/:id" component={BeerDetail} />
        </Switch>
      </div>
    )
  }
}


