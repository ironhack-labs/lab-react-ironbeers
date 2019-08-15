import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Beers from './components/Beers'
import SingleBeer from './components/SingleBeer'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'


function App() {
  return (
    <>
      <Switch>
         <Route path="/" exact component={Home} /> 
         <Route path="/beers" exact component={Beers} /> 
         <Route path="/:id" exact component={SingleBeer} />
         <Route path="/random" exact component={RandomBeer} /> 
         <Route path="/new_beer" exact component={NewBeer} /> 
      </Switch>
    </>
  );
}

export default App;
