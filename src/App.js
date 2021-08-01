import React from 'react';
import { Switch, Route } from 'react-router-dom'

import MainPage from './pages/MainPage/MainPage';
import AllBeers from './pages/AllBeers/AllBeers'
import SingleBeer from './pages/SingleBeer/SingleBeer'
import RandomBeer from './pages/RandomBeer/RandomBeer'
import NewBeer from './pages/NewBeer/NewBeer'

import './App.css';

function App() {
  return (
    <div className="App">

    
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/all-beers" component={AllBeers} exact />
        <Route path="/beers/:id" component={SingleBeer} exact />
        <Route path="/random-beer" component={RandomBeer} exact />
        <Route path="/new-beer" component={NewBeer} exact />
      </Switch>
    </div>
  );
}

export default App;
