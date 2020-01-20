import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import BeerList from './components/beers/BeerList';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import BeerDetail from './components/beers/BeerDetail';
import RandomBeer from './components/beers/RandomBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beers' component={BeerList} />
            <Route exact path='/beers/:id' component={BeerDetail} />
            <Route exact path='/random' component={RandomBeer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
