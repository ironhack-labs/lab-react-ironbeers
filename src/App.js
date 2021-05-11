import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import Home from './components/Home';
import Navbar from './components/Navbar';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import NewBeerForm from './components/NewBeerForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={Beers} />
      <Route exact path="/beers/:id" component={BeerDetails} />
      <Route exact path="/beers/random" component={BeerDetails} />
      <Route exact path="/new-beer" component={NewBeerForm} />
    </div>
  );
}

export default App;
