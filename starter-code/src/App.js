import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import './App.css';
import ListBeersPage  from './pages/ListBeersPage';
import NewBeerPage  from './pages/NewBeerPage';
import RandomBeerPage  from './pages/RandomBeerPage';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/beers' component={ListBeersPage}/>
        <Route exact path='/random-beer' component={RandomBeerPage}/>
        <Route exact path='/new-beer' component={NewBeerPage}/>
      </div>
    );
  }
}

export default App;
