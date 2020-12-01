import React from 'react';
import './App.css';
import Home from './components/Home.js'
import { Switch, Route } from 'react-router-dom';
import Beers from './components/beers'
import SelectedBeer from './components/SelectedBeer'
import RandomBeer from './components/Randombeer'

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={Beers}/>
          <Route exact path='/beers/:beerId' component ={SelectedBeer}/>
          <Route exact path='/beers/random' component={RandomBeer}/>
          <Route path='new-beer' component={NewBeer}/>
        </Switch>
      </div>
  );
}

export default App;
