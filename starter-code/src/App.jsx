import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import AllBeers from "./components/AllBeers";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import BeerInfo from "./components/BeerInfo";
import PageNotFound from "./components/PageNotFound";

import './App.css';
// import Navbar from './components/Navbar'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/all-beers" component={AllBeers}/>
            <Route path="/random-beer" component={RandomBeer}/>
            <Route path="/beer/:id" component={BeerInfo} />
            <Route path="/new-beer" component={NewBeer}/>
            <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
