import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from './Components/Nav'
import Beers from './Components/Beers'
import NewBeers from './Components/NewBeers'
import RandomBeers from './Components/RandomBeers'
import Home from './Components/Home'



import { Switch, Route, Redirect } from 'react-router-dom'

export default class App extends Component {
  render() {

    return (
      <Fragment className="App" >

        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Beers" component={Beers} />
          <Route exact path="/NewBeers" component={NewBeers} />
          <Route exact path="/RandomBeers" component={RandomBeers} />
        </Switch>

      </Fragment>
    );
  }
}
