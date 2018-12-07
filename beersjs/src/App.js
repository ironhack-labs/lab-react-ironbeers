import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Beers from './components/Beers/Beers';
import NewBeers from './components/NewBeers/NewBeers';
import RandomBeers from './components/RandomBeers/RandomBeers';
import OneBeer from './components/OneBeer/OneBeer';

import { Link, Switch, Route  } from "react-router-dom";





class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Switch>
             <Route exact path ="/" component={Home}></Route>
             <Route exact path ="/Beers" component={Beers}></Route>
             <Route exact path ="/newbeer" component={NewBeers}></Route>
             <Route exact path ="/randombeer" component={RandomBeers}></Route>
             <Route exact path ="/single/:id" component={OneBeer}></Route>
           </Switch>
      </div>
    );
  }
}

export default App;

{/* <Route exact path="/" component ={Home}/> */}