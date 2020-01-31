import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home"
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import BeerDetails from "./components/BeerDetails";



class App extends Component {
  render() {    
    return (
      <div className="App">
        <BrowserRouter>
        
        <Switch>
        <Route exact path="/" component={Home} />       
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/beers/:beerID" component={BeerDetails} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
