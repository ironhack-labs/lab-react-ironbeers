import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home';
import Navbar from './components/Navbar';
import BeersList from './components/BeersList';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={BeersList} />
        </Switch>
      
    </div>
  );
}

export default App;
