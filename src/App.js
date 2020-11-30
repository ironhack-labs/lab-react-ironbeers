import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from "./components/Home/Home";
import BeersList from "./components/BeersList/BeersList"
import Beer from "./components/Beer/Beer"
import RandomBeer from "./components/RandomBeer/RandomBeer"
import NewBeer from "./components/NewBeer/NewBeer"



function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={BeersList} />
        <Route path="/beers/:id" component={Beer}/>
        <Route path="/random-beer" component={RandomBeer}/>
        <Route path="/new-beer" component={NewBeer} />
      </div>
    </Router>
  );
}

export default App;
