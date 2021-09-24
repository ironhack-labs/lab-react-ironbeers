import React from 'react';
import './App.css';
import {Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import BeersPage from './pages/BeersPage'
import RandomeBeerPage from './pages/RandomeBeerPage'
import NewBeerPage from './pages/NewBeerPage'
import axios from "axios";
import { useState, useEffect } from "react";
import SingleBeerPage from './pages/SingleBeer';

function App() {
  const [beersList, setBeersList] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log("response.data", response.data);
         setBeersList(response.data); 
      });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(routeProps) => <HomePage {...routeProps}/>}/>
        <Route exact path="/beers" render={(routeProps) => <BeersPage {...routeProps} beersList={beersList} setBeersList={setBeersList}/>}/>
        <Route path="/beers/:beerId" render={(routeProps) => <SingleBeerPage {...routeProps} beersList={beersList} setBeersList={setBeersList}/>}/>
        <Route path="/random-beer" render={(routeProps) => <RandomeBeerPage {...routeProps}/>}/>
        <Route path="/new-beer" render={(routeProps) => <NewBeerPage {...routeProps}/>}/>    
      </Switch>
    </div>
  );
}

export default App;
