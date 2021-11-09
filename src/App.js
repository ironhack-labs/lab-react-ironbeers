import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Header from './components/Header';
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Home} />
        <Route exact path='/beers'>
          <Header/>
          <Beers/>
        </Route> 
        <Route  path='/new-beer'>
        <Header/>
        <NewBeer/>
        </Route>
        <Route  path='/random-beer'>
        <Header/>
        <RandomBeer/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
