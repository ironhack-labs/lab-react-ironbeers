
import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerList from './components/BeerList';
import BeerDetails from './components/BeerDetails'


function RouterApp() {
  return (
    <div className="App">
      <Router>
    
        <Switch>
          <Route component={Home} exact path='/' />
          <Route component={BeerList} exact path='/Beers'/>
          <Route component={RandomBeer} exact path='/RandomBeer'/>
          <Route component={NewBeer} exact path='/NewBeer'/>
          <Route component={BeerDetails} path='/beers/:id' />   
        </Switch>
      </Router>
    </div>
  );
}

export default RouterApp;
