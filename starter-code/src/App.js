import React, { Component } from 'react';
import './App.css';
import beers from './components/beers';
import randombeer from './components/randombeer';
import newbeer from './components/newbeer';
import main from './components/main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import beerinfo from './components/beerinfo';


class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <header className="App-header"><NavBar /></header>
        <Switch>
          <Route exact path='/beers/:id' component={beerinfo} />
          <Route exact path ='/' component={main} />
          <Route exact path='/beers' component={beers} />
          <Route exact path='/randombeer' component={randombeer} />
          <Route exact path='/newbeer' component={newbeer} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
