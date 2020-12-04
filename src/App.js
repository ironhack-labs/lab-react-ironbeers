import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Beers from './components/Beers/Beers';
import Beer from './components/Beer/Beer';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';
import NavBar from './components/NavBar/NavBar';


export default class App extends Component {


  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path='/' component={ Home } />
            <>
              <NavBar />
              <Route exact path='/beers' component={ Beers } />
              <Route exact path='/beers/:id' component={ Beer } />
              <Route exact path='/random-beer' component={ RandomBeer } />
              <Route exact path='/new-beer' component={ NewBeer } />
            </>
          </Switch>
      </div>
    )
  }
}