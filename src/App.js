import React from 'react';
import { Route, Switch } from "react-router-dom";

import Beers from './pages/Beers.jsx';
import Home from './pages/Home';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer'
import SingleBeer from './pages/SingleBeer'

import './App.css';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/newbeer" component={NewBeer} />
        <Route exact path="/randombeer" component={RandomBeer} />
        <Route exact path="/beer/:id" component={SingleBeer}/>
      </Switch>

    </div>
  );
}

export default App;
