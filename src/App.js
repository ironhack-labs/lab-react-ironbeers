import React from 'react';
import './App.css';
import {Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import BeersPage from './pages/BeersPage'
import RandomeBeerPage from './pages/RandomeBeerPage'
import NewBeerPage from './pages/NewBeerPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(routeProps) => <HomePage {...routeProps}/>}/>
        <Route path="/beers" render={(routeProps) => <BeersPage {...routeProps}/>}/>
        <Route path="/beers/:_id" render={(routeProps) => <RandomeBeerPage {...routeProps}/>}/>
        <Route path="/random-beer" render={(routeProps) => <RandomeBeerPage {...routeProps}/>}/>
        <Route path="/new-beer" render={(routeProps) => <NewBeerPage {...routeProps}/>}/>    
      </Switch>
    </div>
  );
}

export default App;
