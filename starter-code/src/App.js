import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NewBeer from "./components/NewBeer";
import BeerDetail from "./components/BeerDetail";
import RandomBeer from "./components/RandomBeer";
import Beers from './components/Beers'; 

import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/"component={Home}/>
          <Route exact path="/beers/:id" component={BeerDetail} />
          <Route exact path="/beers" component={Beers}/>
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/random-beer/" component={RandomBeer} /> 
        </Switch>
      </div>
    );
  }
}

export default App;