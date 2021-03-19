import React from 'react';
import beers from './assets/beers.png';
import newBeer from './assets/new-beer.png';
import randomBeer from './assets/random-beer.png';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/Header';
import BeerList from './components/beer-list/BeerList';
import Home from './components/home/Home';
import BeerDetail from './components/beer-detail/BeerDetail';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={BeerList} />
          <Route exact path="/:id" component={BeerDetail} />
      </Switch>
    </Router>
  );
}

export default App;
