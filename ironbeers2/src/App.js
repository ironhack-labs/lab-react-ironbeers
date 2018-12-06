import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import { Switch, Route } from 'react-router-dom';
import Beers from "./components/Beers";
import BeersDetail from './components/BeerDetail';
import RamdomBeer from './components/RamdomBeers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/randomBeer" component={RamdomBeer} />
          <Route exact path="/beers/:id" component={BeersDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
