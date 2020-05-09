import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import ListBeers from "./components/ListBeers/ListBeers"
import RandomBeer from "./components/RandomBeer/RandomBeer";
import SingleBeer from "./components/SingleBeer/SingleBeer"
import NewBeer from "./components/NewBeer/NewBeer"
import './App.css';

class App extends Component {


  render() {
    // filtering des beers
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list-beers"><ListBeers /></Route>
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/list-beers/:id" component={SingleBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
