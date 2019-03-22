import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import  beers from "./components/beers"
import randomeBeers from "./components/randomBeer"
import newBeer from "./components/newBeer"
import home from "./components/home"
import Apiservice from "./service/apiservice"
import axios from "axios";


class App extends Component {
  render() {
    return (
      <div className="App">
         <Apiservice/>
        <Switch>
       
        <Route exact path='/' component={home} />

        <Route path='/beers' component={Apiservice} />
        <Route path='/newBeer' component={newBeer} />
        <Route path='/randomeBeers' component={randomeBeers} />


        </Switch>
       
      </div>
    );
  }
}

export default App;
