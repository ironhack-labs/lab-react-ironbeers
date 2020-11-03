import React from 'react';
import {Switch,Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import AllBeer from './components/AllBeer';
import Home from './components/Home';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/beers' component={AllBeer}/>
     <Route exact path='/random-beer' component={RandomBeer}/>
     <Route exact path='/new-beer' component={NewBeer}/>
     <Route exact path='/beers/:beerId' component={SingleBeer}/>

     </Switch>
    </div>
  );
}

export default App;
