import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Homepage from './component/Homepage';
import NavBar from './component/navbar'
import Beer from './component/beer'
import UniqueBeer from './component/uniquebeer'
import RandomBeer from './component/randombeer'
import NewBeer from './component/newbeer';
import SearchBar from './component/searchbar'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/beers' component={SearchBar}></Route>
      </Switch>
       <Switch>
        <Route path='/beers' component={NavBar}></Route>
        <Route path='/random-beers' component={NavBar}></Route>
        <Route path='/new-beer' component={NavBar}></Route>
      </Switch>
      <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route exact path='/beers/:id' component={UniqueBeer}></Route>
      <Route path='/beers' component={Beer}></Route>
      <Route path='/random-beers' component={RandomBeer}></Route>
      <Route path='/new-beer' component={NewBeer}></Route>
      </Switch> 
      </div>
    );
  }
}

export default App;
