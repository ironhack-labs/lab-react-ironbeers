import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
//import queryString from 'query-string';
import Home from './components/Home';
import BeerList from './components/BeerList';
import RandomBeer from './components/RandomBeer';
import AddBeer from './components/AddBeer';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={BeerList} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={AddBeer} />
        <Route exact path="/beer/:id" component={BeerDetails} />
      </Switch>
    </div>
  );
}

export default App;
