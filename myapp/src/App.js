import React, { Component } from 'react';
import './App.css';
import HomePage from './views/HomePage';
import { Route } from 'react-router-dom';
import BeerList from './views/BeerList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <HomePage></HomePage>}></Route>
        <Route path="/beers" render={() => <BeerList></BeerList>}></Route>
      </div>
    );
  }
}

export default App;
