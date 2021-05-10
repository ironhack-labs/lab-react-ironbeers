import React from 'react';
import {Component} from "react";
import './App.css';
import Homepage from "./components/Homepage";
import { Route, Switch } from 'react-router';
import AllBeers from "./components/AllBeers"


function App () {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/beers" component={AllBeers} />
      </Switch>
    </div>
  );
  }



export default App;
