import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home';
import Beers from './Beers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';



function App() {
  return (
    <div className="App">

    <Route exact path='/' component={Home} />
    <Route exact path='/beers' component={Beers} />
    <Route exact path='/random-beer' component={RandomBeer} />
    <Route exact path='/new-beer' component={NewBeer} />

    </div>
  );
}

export default App;
