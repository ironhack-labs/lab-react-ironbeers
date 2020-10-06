import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/homepage/homePage'
import Beers from './Components/beers/beers';
import RandomBeer from './Components/randombeer/randomBeer';
import NewBeer from './Components/newbeer/newBeer';


export default class App extends React.Component {
  render(){
  return (
    <div className="App">
        <BrowserRouter>
        <Switch>
          <Route path="/beers" exact component={Beers} />
          <Route path="/random-beer" exact component={RandomBeer} />
          <Route path="/new-beer" exact component={NewBeer} />
          <Route path="/" exact component={Home} />
        </Switch> 
        </BrowserRouter>
    </div>
  )
}}

