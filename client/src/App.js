import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BeerList from './components/BeerList'
import './App.css';

import Home from './components/Home'
import BeerDetails from './components/BeerDetails';
import NavBar from './components/NavBar';
import NewBeer from './components/NewBeer'



class App extends Component {
  render() {
    
    return (
      <div className="App">
        
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beers' component={BeerList} />
            <Route exact path='/beers/:id' component={BeerDetails} />
            <Route exact path='/random-beer' component={BeerDetails} />
            <Route exact path='/new-beer' component={NewBeer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
