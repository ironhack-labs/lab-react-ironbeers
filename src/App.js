import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import BeerDetails from './components/BeerDetails';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/beers/:beerId" component={BeerDetails} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={Form} />
      </Switch>
    </div>
  );
}

export default App;
