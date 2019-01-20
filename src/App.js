import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AllBeers from './pages/AllBeers';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
export default class App extends Component {
  render() {
    return (
      <div className="app">
        {window.location.pathname === '/' ? null : <Header></Header>}
        <Switch>
          <Route exact strict path="/" component={Home}/>
          <Route exact path="/beers" component={AllBeers}/>
          <Route exact path="/beers/:id" component={SingleBeer}/>
          <Route exact path="/random-beer" component={RandomBeer}/>
          <Route exact path="/new-beer" component={NewBeer}/>
        </Switch>
      </div>
    );
  }
}
