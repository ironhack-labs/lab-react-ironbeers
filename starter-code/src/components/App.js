import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import ListBeers from './ListBeer'
import RandomBeer from './RandomBeer'
import NewBeer from './NewBeer'



class App extends Component {
  render() {
    return (
      <Switch>
      <Route path="/" exact render={() => <Home />}/>
      <Route path="/beers" render={() => <ListBeers />}/>
      <Route path="/random" render={() => <RandomBeer />}/>
      <Route path="/new" render={() => <NewBeer />}/>
      </Switch>
    );
  }
}

export default App;
