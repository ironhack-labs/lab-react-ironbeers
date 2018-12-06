import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Beers from "./Components/Beers/Beers";
import RandomBeers from "./Components/RandomBeer/RandomBeer";
import NewBeer from "./Components/NewBeer/NewBeer";
import NavBar from "./Components/NavBar/NavBar";

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/NavBar" component={NavBar}/>
          <Route exact path="/Beers" component={Beers}/>
          <Route exact path="/RandomBeers" component={RandomBeers}/>
          <Route exact path="/NewBeer" component={NewBeer}/>

        
        </Switch>

      </div>
    );
  }
}

export default App;
