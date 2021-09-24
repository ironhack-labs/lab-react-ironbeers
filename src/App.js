import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Home from './pages/Home';
import Beers from './pages/Beers';
import BeerDetails from './pages/BeerDetails'


function App() {
  return (
    <div className="App row">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
        <Route exact path="/beers/:_id" component={BeerDetails} />
      </Switch>
    </div>
  );
}

export default App;
