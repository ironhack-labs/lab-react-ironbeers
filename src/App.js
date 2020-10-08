import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from "./components/HomePage"
import Beers from './pages/Beers';
import RandomBeers from './pages/RandomBeers';
import NewBeers from './pages/NewBeers';
import OneBeer from './pages/OneBeer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path = "/beers/:beerId" component={OneBeer}/>
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeers} />
        <Route exact path="/new-beer" component={NewBeers} />
      </BrowserRouter>
    </div>
  );
}

export default App;
