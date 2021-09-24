import React from 'react';
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import ListBeers from './Beer/ListBeers';
import RandomBeer from './Beer/RandomBeer';
import NewBeer from './Beer/NewBeer';
import SingleBeer from './Beer/SingleBeer';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/beers" component={ListBeers}/>
      <Route exact path="/random-beer" component={RandomBeer}/>
      <Route exact path="/new-beer" component={NewBeer}/>
      <Route path="/beers/:beerId" component={SingleBeer}/>
    </BrowserRouter>
  );
}

export default App;
