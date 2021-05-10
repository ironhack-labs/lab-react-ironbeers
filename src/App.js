import React from 'react';
import {Component} from "react";
import './App.css';
import Homepage from "./pages/Homepage";
import { Route, Switch } from 'react-router';
import AllBeers from "./components/AllBeers";
import BeerDetails from "./components/BeerDetails";
import RandomBeer from "./components/RandomBeer"



function App () {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/beers/:id" component={BeerDetails} />
        <Route exact path="/beers/:id" component={RandomBeer} />
      </Switch>
    </div>
  );
  }



export default App;
