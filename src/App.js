import React, { Component } from 'react'
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import BeerList from './components/BeerList'
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';


export default class App extends Component {
  render() {
    return (
      <div>
    {/* <h1>Thanks</h1> */}
        <Header />
        {/* <BeerList /> */}
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={BeerList}/>
        <Route exact path="/random-beer" component={RandomBeer}/>
        <Route exact path="/new-beer" component={NewBeer}/>
        <Route exact path="/beers/:beerId" component={SingleBeer}/>
        <Route exact path="/random-beer" component={RandomBeer}/>
        </Switch>
    </div>
    )
  }
}



