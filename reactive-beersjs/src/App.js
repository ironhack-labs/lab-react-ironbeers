import React from 'react';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import BeerInfo from './components/BeerInfo';
import AddBeer from './components/AddBeer';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={Beers} />
        <Route path='/beer/:beerID' component={BeerInfo} />
        <Route exact path='/random-beer' component={BeerInfo} />
        <Route exact path='/new-beer' component={AddBeer} />
      </Switch>
    </div>
  );
}

export default App;
