import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home';

import BeersList from './components/BeersList'
import RandomBeer from './components/RandomBeer'
import CreateBeer from './components/CreateBeer'

function App() {
  return (
    <>
    <Switch>
      <Route path="/beers" component={BeersList}/>
      {/* <Route path="/beers/:id" component={BeerDetail}/> */}
      <Route path="/random-beer" component={RandomBeer}/>
      <Route path="/new-beer" component={CreateBeer}/>
    </Switch>
    <div className="App">
    <Home/>
    </div>
    </>
  )
}

export default App;
