import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './screen/Home';
import ListBeer from './screen/ListBeer'
import RandomBeer from './screen/RandomBeer'
import NewBeer from './screen/NewBeer'
import BeerDetails from './screen/BeerDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={ListBeer} />
        <Route exact path="/beers/:id" component={BeerDetails} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
