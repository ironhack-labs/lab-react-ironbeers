import React, { Component } from 'react';
import './App.css';
import Home from './components/pages/Home'
import AllBeers from './components/pages/AllBeers'
import BeerDetail from './components/pages/BeerDetail'
import RandomBeer from './components/pages/RandomBeer'
import NewBeer from './components/pages/NewBeer'
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* Switch renders maximum 1 Route */}
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/beers' component={AllBeers} />
        <Route exact path='/beers/:id' component={BeerDetail} />
        <Route exact path='/random' component={RandomBeer} />
        <Route exact path='/new-beer' component={NewBeer} />
        <Route render={()=><h1>404</h1>} />
      </Switch>
      </div>
    );
  }
}

export default App;
