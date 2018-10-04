import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import {List} from './components/List';
import {Random} from './components/Random';
import {NewBeer} from './components/NewBeer';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Switch>
            <Route exact path='/' component={Navbar} />
            <Route path='/beers' component={List} className="menu-item" />
            <Route path='/random-beer' component={Random} className="menu-item" />
            <Route path='/new-beer' component={NewBeer} className="menu-item" />
        </Switch>
        
      </div>
    );
  }
}

export default App;
