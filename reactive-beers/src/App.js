import React, { Component } from 'react';
import Home from './components/CompHome';
import CompAll from './components/CompAll';
import CompRandom from './components/CompRandom';
import CompNew from './components/CompNew';
import './App.css';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const http = require('http');
const cors = require('http-cors');


class App extends Component {
  render() {
    return (     
      <div className="App"> 
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/beers' component={CompAll}/>
          <Route path='/random-beer' component={CompRandom}/>
          <Route path='/new-beer' component={CompNew}/>
        </Switch>
      </div>
    );
  }
}

export default App;
