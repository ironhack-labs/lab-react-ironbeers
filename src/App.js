import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={Beers} /> 
      <Route exact path="/random-beer" component={RandomBeer} />
      <Route exact path="/new-beer" component={NewBeer} /> 
      <Route exact path='/beers/:Id' component={SingleBeer}/> 
    </Switch>
    
     
    </div>
  )
}

export default App;
