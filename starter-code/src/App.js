import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import HomePage from "./components/homepage/HomePage";
import Beers from './components/beers/Beers';
import RandomBeer from './components/beers/RandomBeers';
import NewBeer from './components/beers/NewBeer';
import axios from 'axios';


class App extends React.Component {
render(){
    return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/beers" component={Beers}/>
        <Route exact path="/random-beer" component={RandomBeer}/>
        <Route exact path="new-beer" component={NewBeer}/>
      </Switch>
    );
  }
}

export default App;
