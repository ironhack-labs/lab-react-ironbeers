import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import { Route,Switch } from "react-router-dom";
import AllBeers from './Components/AllBeers';
import Randombeer from './Components/Randombeer';
import NewBeer from './Components/NewBeer';
import SingleBeerPage from './Components/SingleBeerPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/beers' component={AllBeers}/>
          <Route exact path='/random-beer' component={Randombeer}/>
          <Route exact path='/new-beer' component={NewBeer}/>
          <Route exact path='/beers/:_id' component={SingleBeerPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
