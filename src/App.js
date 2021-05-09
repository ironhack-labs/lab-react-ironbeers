import React from 'react';
import Homepage from './components/Homepage';
import AllBeers from './components/AllBeers';
import BeerDetails from './components/BeerDetails';
import './App.css';
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/beers" component={AllBeers} />
      <Route path="/beers/:id" component={BeerDetails} />
    </div>
  );
}

export default App;
