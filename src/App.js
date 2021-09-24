import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navigation/Navigation';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import AllBeers from './components/pages/AllBeers/AllBeers'
import Details from './components/pages/Details/Details';
import Random from './components/pages/RandomBeers/RandomBeers';
import NewBeer from './components/pages/NewBeer/NewBeer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/beers" render={() => <AllBeers />} />
        <Route path="/beers/:id" render={(props) => <Details {...props} />} />
        <Route path="/random" render={() => <Random />} />
        <Route path="/create" render={() => <NewBeer />} />
      </Switch>
    </div>
  );
}

export default App;
