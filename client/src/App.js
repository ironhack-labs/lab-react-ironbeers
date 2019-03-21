import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BeerList from './components/BeerList'
import './App.css';

import Home from './components/Home'



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hola</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beers' component={BeerList} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
