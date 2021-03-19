import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom"

import Home from './views/Home'
import Beers from './views/Beers'
import Beer from './views/Beer'
import NewBeer from './views/NewBeer'
import RandomBeer from './views/RandomBeer'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">

      <NavBar/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:id" component={Beer} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
