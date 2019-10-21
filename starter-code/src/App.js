import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "./components/home";
import './App.css';
import Beers from './components/beers';
import Single from "./components/single";
import Random from "./components/random";
import New from "./components/new";
import Signup from "./components/signup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Signup} exact></Route>
        <Route path="/home" component={Home} exact></Route>
        <Route path="/beers" component={Beers} exact ></Route>
        <Route path="/beers/:id" component={Single} exact></Route>
        <Route path="/random-beer" component={Random} exact></Route>
        <Route path="/new-beer" component={New} exact></Route>
      </div>
    );
  }
}

export default App;
