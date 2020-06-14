import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import BeerList from './Components/BeerList';
import SingleBeer from './Components/SingleBeer';
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';

function App() {
  return (
    <div className="App">
    <Route exact path="/" component={Home} />
    <Route exact path="/beers" component={BeerList} />
    <Route path="/beers/:id" component={SingleBeer} />
    <Route path="/random" component={RandomBeer} />
    <Route exact path="/new" component={NewBeer} />


    
    </div>
  );
}

export default App;
