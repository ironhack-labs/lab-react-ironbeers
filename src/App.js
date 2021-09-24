import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/home.js';
import Beers from './pages/beers.js';
import BeerDetails from './pages/beer-details.js';
import RandomBeer from './pages/random-beer.js';
import NewBeer from './pages/new-beer.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/beers/:id" component={BeerDetails} />

        <Route path="/random" component={RandomBeer} />

        <Route path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
