import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import OneBeer from './components/OneBeer';


function App() {
  return (
    <div className="App">
    <Route path='/' component={Header}/>
    <Switch>
      <Route path='/beers/:id' component={OneBeer}/>
      <Route path='/beers' component={Beers}/>
      <Route path='/random-beer' component={RandomBeer}/>
      <Route path='/new-beer' component={NewBeer}/>
      <Route path='/' component={Home}/>
    </Switch>
    
      
    </div>
  );
}

export default App;
