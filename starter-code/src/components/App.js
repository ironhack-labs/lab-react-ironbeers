import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import ListBeers from './listBeers/ListBeers'
import RandomBeer from './randomBeer/RandomBeer'
import NewBeer from './newBeer/NewBeer'
import SingleBeer from './singleBeer/SingleBeer'


class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/beers" render={() => <ListBeers />} />
          <Route exact path="/beers/:id" render={() => <SingleBeer />} />
          <Route exact path="/random-beer" render={() => <RandomBeer />} />
          <Route exact path="/new-beer" render={() => <NewBeer />} />
        </Switch>
      </>
    );
  }
}
export default App;