import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home';
import Beers from './Beers';
import BeerDetails from './BeerDetails';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import Header from './Header';



function App() {
  return (
    <div className="App">

    <Route exact path='/' component={Home} />
    <Route exact path='/beers' component={Beers} />
    <Route exact path='/beers/:beerId/' component={BeerDetails} />
    <Route exact path='/random-beer' component={RandomBeer} />
    <Route exact path='/new-beer' component={NewBeer} />

    </div>
  );
}

export default App;

// I don't think I know how I can do iteration 2 for now
