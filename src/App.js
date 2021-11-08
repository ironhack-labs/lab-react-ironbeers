import React from 'react';
import './App.css';
import Home from './components/Home'
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Beers from './components/Beers';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/random-beer' component={RandomBeer} />
        <Route exact path='/new-beer' component={NewBeer} />
        <Route exact path='/beers' component={Beers} />
      </Switch>
    </div>
  );
}

export default App;
