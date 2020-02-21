import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom"

import Home from "./views/Home"
import Beers from "./views/Beers"
import NewBeer from "./views/NewBeer"
import RandomBeer from "./views/RandomBeer"
import SingleBeer from "./views/SingleBeer"
import NotFound from "./views/NotFound"

import NavMain from "./components/NavMain"
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavMain/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beers" component={Beers} />
        <Route path="/new-beer" component={NewBeer} />
        <Route path="/random-beer/:id" component={RandomBeer} />
        <Route path="*" component={NotFound} />
        <Route path="/beers/:id" component={SingleBeer} />
      </Switch>
        
      </div>
    );
  }
}

export default App;
