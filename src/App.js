import React from 'react';
import './App.css';
import Home from './components/Home.js'
import { Switch, Route } from 'react-router-dom';
import Beers from './components/Beers'
import SelectedBeer from './components/SelectedBeer'
import RandomBeer from './components/Randombeer'
import AddNewBeer from './components/AddNewBeer'

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={Beers}/>
          <Route exact path='/beers/random' component={RandomBeer}/>
          <Route exact path='/beers/:beerId' component ={SelectedBeer}/>
          <Route exact path='/new-beer' component={AddNewBeer}/>
        </Switch>
      </div>
  );
}

export default App;
