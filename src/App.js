import React from 'react';
import './App.css';
import Home from './components/Home'
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/NewBeer';
import axios from 'axios';
import OneBeer from './components/OneBeer'

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div> 
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={Beers}/>
          <Route exact path='/beers' component={NewBeer}/>
          <Route exact path='/beers' component={RandomBeer}/>
          <Route path="/beers/:id" component={OneBeer} />
        </Switch>
    </div>
  );
}

export default App;
