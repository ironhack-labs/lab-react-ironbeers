import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import ListBeers from './List Beers/ListBeers'
import RandomBeer from './Random Beer/RandomBeer'
import NewBeer from './New Beer/NewBeer'
import SingleBeer from './Single Beer/SingleBeer'



class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/beers" render={() => <ListBeers />} />
          <Route exact path="/random-beer" render={() => <RandomBeer />} />
          <Route exact path="/new-beer" render={() => <NewBeer />} />
          <Route exact path="/beers/:id" render={() => <SingleBeer />} />
        </Switch>
      </>
    );
  }
}

export default App;
