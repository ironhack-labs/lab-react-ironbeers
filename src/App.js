import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { Switch , Route } from 'react-router-dom';
import ListBeers from './components/ListBeers';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';
import NewBeer from './components/NewBeer';

class App extends Component {

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" component={ListBeers}/>
          <Route exact path="/beers/:id" component={SingleBeer}/>
          <Route exact path="/random-beer" component={RandomBeer}/>
          <Route exact path="/new-beer" component={NewBeer}/>
        </Switch>
      </>
    )
  }

}

export default App;
