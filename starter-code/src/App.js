import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import Homeblock from "./components/Homeblock";
import {Route, Switch} from "react-router-dom"
import Allbeers from "./components/Allbeers"
import Beerdetail from './components/Beerdetail';
import Randombeer from './components/Randombeer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beers" component={Allbeers} />
        <Route path="/random-beer" component={Randombeer} />
        <Route path="/new-beer" component={Newbeer} />
        <Route path="/beers/:beerId" component={Beerdetail} />
      </Switch>
      </div>
    );
  }
}

export default App;
