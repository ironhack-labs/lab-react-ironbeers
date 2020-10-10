import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Beers from './components/Beers'
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={Beers} />
        <Route exact path='/beers/random' component={RandomBeer} />
        <Route exact path='/beers/create' component={NewBeer} />
        <Route exact path='/beers/:id' component={BeerDetails} />
      </Switch>

    </div>
  );
}

export default App;
