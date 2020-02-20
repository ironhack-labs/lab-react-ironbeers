import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Switch, Route} from "react-router-dom" ;

import Home from "./components/Home" ;

import Listbeers from "./components/Listbeers" ;

import Newbeer from "./components/Newbeer" ;

import Randombeer from "./components/Randombeer" ;

import Singlebeer from "./components/Singlebeer" ;


class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
      <Route exact path="/" component= {Home}/>
      <Route path="/beers" component= {Listbeers} />
      <Route path="/beer/:id" component= {Singlebeer} />
      <Route path="/random-beer" component= {Randombeer} />
      <Route path="/new-beer" component= {Newbeer} />
      </Switch>
      </div>
    );
  }
}

export default App;
