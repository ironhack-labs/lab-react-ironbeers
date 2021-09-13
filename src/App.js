import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Beers from './components/Beers.js';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer.js';
import { Switch, Route, Link } from 'react-router-dom';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/Beers">Beers</Link>
          <Link to="/RandomBeer">Random Beer</Link>
          <Link to="/NewBeer">New Beer</Link>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Beers" component={Beers} />
        <Route exact path="/RandomBeer" component={RandomBeer} />
        <Route exact path="/NewBeer" component={NewBeer} />
        <Route exact path="/beer/:beerId" component={BeerDetails} />
      </Switch>
    </div>
  );
}

export default App;
