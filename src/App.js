import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/random-beer">
          <RandomBeer/>
        </Route>
        <Route path="/beers">
          <Beers/>
        </Route>
        <Route path="/beers:id">
        
        </Route>
        <Route path="/new-beer">
          <NewBeer/>
        </Route>
  
      </Switch>
    </Router>
    
  );
}

export default App;
