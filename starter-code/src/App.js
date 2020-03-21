import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Switch, Route } from 'react-router-dom';


import Home from './components/Home'
import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import BeerDetail from './components/BeerDetail'

const App = () => {
    return (
      <>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
      <div className="App">
        
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/beers' component={Beers}/>
            <Route path='/random-beer' component={RandomBeer}/>
            <Route path='/new-beer' component={NewBeer}/>
            <Route path='/beers/:id' component={BeerDetail}/>
          </Switch>
       
      </div>
      </>
    );
  }


export default App;
