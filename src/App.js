import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
