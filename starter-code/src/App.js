import React, { Component } from 'react';
import Home from "./Home";
import Beers from "./Beers";
import Detail from "./Detail"
import Random from "./Random"
import New from "./New"
import './App.css';
import {Route, Switch} from "react-router-dom";


function App () {
    return (
      <div className="App">
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={Beers} />
      <Route exact path="/beers/:id" component={Detail} />
      <Route exact path="/random" component={Random}  /> 
        <Route exact path="/new" component={New} />
      </Switch>
      </div>
    );
  }

export default App;
