import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import BeerList from './components/BeerList';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
         <Navbar/>
        </div>

        <Switch>
          <Route exact path="/allBeers" component={BeerList}/>
          <Route exact path= "/randomBeer/:id" component={RandomBeer}/>
          <Route exact path= "/newBeer" component={NewBeer}/>
        </Switch>

      </div>
    );
  }
}
