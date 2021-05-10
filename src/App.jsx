import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import BeerDetails from './pages/BeerDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/beers/:beerId" component={BeerDetails}/>
        <Route path="/random-beer" component={RandomBeer}/>
        <Route path="/new-beer" component={NewBeer}/>
        <Route path="/beers" component={Beers}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;