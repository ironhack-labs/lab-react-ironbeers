import React, { Component } from 'react';
import './App.css';
import Home from "./Components/Home";
import BeersList from "./Components/BeersList";
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';
import { Switch, Route } from "react-router-dom";
import SingleBeer from './Components/SingleBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/beers" component={BeersList} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/beers/:id" component={SingleBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
