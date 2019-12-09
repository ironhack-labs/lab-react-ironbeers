import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import Beer from './components/Beer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
//import axios from 'axios';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <a href='/'><ion-icon name="home"></ion-icon></a>
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Beer' component={Beer} />
          <Route exact path='/RandomBeer' component={RandomBeer} />
          <Route exact path='/NewBeer' component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
