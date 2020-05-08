import React, { Component } from "react";
import "./styles/Main.css";
import { Switch, Route } from "react-router-dom";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Home from "./components/Home";
import BeerDetails from "./components/BeerDetails";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/beers' component={AllBeers}></Route>
          <Route exact path='/beers/:id' component={BeerDetails}></Route>
          <Route exact path='/random' component={RandomBeer}></Route>
          <Route exact path='/new' component={NewBeer}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
