import React from 'react';
import './App.css';
import Home from './components/Home.js'
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Beers from './components/Beers'
import SelectedBeer from './components/SelectedBeer'
import RandomBeer from './components/Randombeer'
import NewBeer from './components/NewBeer'

function App() {
  return (
    <div className="App">
       <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={Beers}/>
          <Route exact path='/beers/random' component={RandomBeer}/>
          <Route exact path='/beers/:beerId' component ={SelectedBeer}/>
          <Route path='new-beer' component={NewBeer}/>
        </Switch>
      </div>
  );
}

export default App;
