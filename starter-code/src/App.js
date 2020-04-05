import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import AllBeers from './components/AllBeers'
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
 




class App extends Component {



  render() {
    return (
      <div className="App">
        
      <Switch>
        <Route exact path ='/' component={Home} />
        <Route exact path ='/beers' component={AllBeers} />
        <Route path ='/beers/:id' component={BeerDetails} />
        <Route path ='/random-beer' component={RandomBeer} />
        <Route path ='/new-beer' component={NewBeer} />

      </Switch>

        
      </div>
    );
  }
}

export default App;
