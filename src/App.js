import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import NewBeer from './Components/NewBeer';
import RandomBeer from './Components/RandomBeer';
import AllBeers from './Components/AllBeers';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/beers" component={AllBeers} />

      </Switch>
    </div>
  );
}

export default App;
