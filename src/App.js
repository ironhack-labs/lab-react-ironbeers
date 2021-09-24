import React from 'react';
import './App.css';
import { Switch, Route, Link, Router } from "react-router-dom"
import Beers from "./components/beers"
import RandomBeer from "./components/random-beer"
import NewBeer from "./components/new-beer"
import HomePage from "./components/home-page"


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"
              render={(beers) => {
                  return <HomePage/>}
              }
            />
        <Route path="/beers"
              render={(beers) => {
                  return <Beers/>}
              }
            />
        <Route path="/random"
              render={(beers) => {
                  return <RandomBeer/>}
              }
            />
        <Route path="/new"
              render={(beers) => {
                  return <NewBeer/>}
              }
            />
        
        </Switch>
    </div>
  );
}

export default App;
