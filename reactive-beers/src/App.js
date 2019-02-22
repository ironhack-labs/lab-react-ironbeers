import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';
import { Switch, Route } from 'react-router-dom';
import AllBeers from './components/allBeers';
import RandomBeer from './components/randomBeer';
import NewBeer from './components/newBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/allBeers" component={AllBeers} />
          <Route path="/randomBeer" component={RandomBeer} />
          <Route path="/newBeer" component={NewBeer} />
        </Switch>

      </div>
    );
  }
}

export default App;
