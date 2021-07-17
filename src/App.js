import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';

class App extends Component {

  render() {
    return (
      <>
        <Switch>
          <Route exact path={'/'} render={() => {
            return <Home />
          }} />
          <Route path={'/beers'} render={() => {
            return <Beers />
          }} /> 
          <Route path={'/random-beer'} render={() => {
            return <RandomBeer />
          }} />
          <Route path={'/new-beer'} render={() => {
            return <NewBeer />
          }} />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
